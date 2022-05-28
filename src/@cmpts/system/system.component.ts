import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PagingParameter, ResponsePagingResult } from 'src/@sun/models/paging.model';
import { ConfirmDialogComponent } from 'src/@sun/shared/cmpts/confirm-dialog/confirm-dialog.component';
import { Paginator, PaginatorColumn } from 'src/@sun/shared/cmpts/paginator/paginator.component';
import { NotifyService } from 'src/@sun/shared/services/notify.service';
import { DialogSystemComponent } from './dialog-system/dialog-system.component';
import { SysElet, SysFilter, SYSTEM_ELEMENT_DATA } from '../../@sun/models/system.model';
import { SystemService } from './system.service';

@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.scss']
})
export class SystemComponent implements OnInit, AfterViewInit {

  dto: SysFilter = new SysFilter();
  params = new PagingParameter<SysFilter>();
  currentSys: SysElet | null = null;

  total = 35;
  columnOp = 'createdAt';
  columns: Array<PaginatorColumn> = [
    { name: '名称', value: 'name' },
    { name: '标识码', value: 'code' },
    { name: '创建时间', value: 'createdAt' },
  ];
  displayedColumns = ['logo', 'name', 'code', 'createdAt', 'intro', 'remark', 'operate',];
  dataSource: SysElet[] = [];

  @ViewChild("imageInput", { static: false })
  imageInput!: ElementRef;

  constructor(private router: Router,
    private dialog: MatDialog,
    private notifyServ: NotifyService,
    private hostServ: SystemService,) { }

  ngOnInit() {
    this.onResetClick();
  }

  ngAfterViewInit() {
  }

  onSearchClick(): void {
    this.params.filter = this.dto;
    this._loadData(this.params);
  }

  onResetClick(): void {
    this.dto = new SysFilter();
    this.params.filter = this.dto;
    this.params.pageIndex = 1;
    this.params.pageSize = 10;
    this.params.sortColumn = this.columnOp;
    this.columnOp = 'createdAt';
    this._loadData(this.params);
  }

  onAddClick(): void {
    const e: SysElet = {
      id: '', logo: null, name: '', code: '', intro: '', createdAt: null, remark: ''
    };
    const dialogRef = this.dialog.open(DialogSystemComponent,
      { width: '520px', data: e, });

    dialogRef.afterClosed().subscribe(result => {
      if (result?.op === 'save' && result?.e) {
        this.notifyServ.notify(`系统【${e.name}】信息保存成功！！！`, 'success');
        this.onSearchClick();
      }
    });
  }

  onEditClick(e: SysElet): void {
    const dialogRef = this.dialog.open(DialogSystemComponent,
      { width: '520px', data: e, });

    dialogRef.afterClosed().subscribe(result => {
      if (result?.op === 'save' && result?.e)
        this.notifyServ.notify(`系统【${e.name}】信息更新成功！！！`, 'success');
        this.onSearchClick();
    });
  }

  onLogoClick(e: SysElet): void {
    this.currentSys = e;
    this.imageInput.nativeElement.click();
  }

  onProgtamClick(e: SysElet): void {
    this.router.navigate([`/system/program/${e.id}/${e.name}`]);
  }

  onRoleClick(e: SysElet): void {
    this.router.navigate([`/system/role/${e.id}/${e.name}`]);
  }

  onDeleteClick(e: SysElet): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '260px',
      data: `确定要删除【${e.name}】系统信息吗？`,
    });

    dialogRef.afterClosed().subscribe((result: string) => {
      if (result === 'yes') this._delete(e);
    });
  }

  onPaginatorChange(paginator: Paginator): void {
    this.params.filter = this.dto;
    this.params.pageIndex = paginator.pageIndex;
    this.params.pageSize = paginator.pageSize;
    this.params.sortColumn = paginator.column;
    this.params.sort = paginator.sort;
    this._loadData(this.params);
  }

  onFileChange(e: any): void {
    if (e?.target?.files?.length > 0 && this.currentSys) {
      const formData = new FormData();
      formData.append('id', this.currentSys.id as string);
      formData.append('logo', e.target.files[0]);
      this.hostServ.icon(formData).subscribe({
        next: res => {
          if (res.success) {
            if (this.currentSys) this.currentSys.logo = res.data;
          } else {
            const msg = `程序${this.currentSys?.name}的logo上传失败！！！ ${res.allMessages}`;
            this.notifyServ.notify(msg, 'error');
          }
        },
        error: err => {
          const msg = `程序${this.currentSys?.name}的logo上传失败！！！ ${err}`;
          this.notifyServ.notify(msg, 'error');
        }
      });
    }
  }

  private _loadData(params: PagingParameter<SysFilter>): void {
    this.hostServ.serach(params).subscribe({
      next: res => { this._renderInfo(res); },
      error: err => {
        const msg = `数据加载失败！！！ ${err}`;
        this.notifyServ.notify(msg, 'error');
        this.dataSource = SYSTEM_ELEMENT_DATA; // TODO 待删除
      }
    });
  }

  private _renderInfo(res: ResponsePagingResult<SysElet>): void {
    if (res.success) {
      this.total = res.rowsCount;
      this.dataSource = res.data;
    } else {
      const msg = `数据加载失败！！！ ${res.allMessages}`;
      this.notifyServ.notify(msg, 'error');
    }
  }

  private _delete(e: SysElet): void {
    this.hostServ.delete(e.id as string).subscribe({
      next: res => {
        if (res.success) {
          this.notifyServ.notify(`系统【${e.name}】信息已删除！！！`, 'success');
          this.onSearchClick()
        } else {
          const msg = `系统【${e.name}】信息删除失败！！！ ${res.allMessages}`;
          this.notifyServ.notify(msg, 'error');
        }
      },
      error: err => {
        const msg = `系统【${e.name}】信息删除失败！！！ ${err}`;
        this.notifyServ.notify(msg, 'error');
      }
    });
  }


}

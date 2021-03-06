import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { OptionItem, PagingParameter, ResponsePagingResult } from 'src/@sun/models/paging.model';
import { ConfirmDialogComponent } from 'src/@sun/shared/cmpts/confirm-dialog/confirm-dialog.component';
import { Paginator, PaginatorColumn } from 'src/@sun/shared/cmpts/paginator/paginator.component';
import { NotifyService } from 'src/@sun/shared/services/notify.service';
import { DialogProgramComponent } from './dialog-program/dialog-program.component';
import { PgmElet, PgmFilter, PgmCategory, PGM_TYPE_OPS } from '../../@sun/models/program.model';
import { ProgramService } from './program.service';
import { AuthService } from 'src/@sun/shared/services/auth.service';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.scss']
})
export class ProgramComponent implements OnInit {

  dto: PgmFilter = new PgmFilter();
  params = new PagingParameter<PgmFilter>();
  typeOps: OptionItem[] = PGM_TYPE_OPS;

  total = 35;
  columnOp = 'createdAt';
  columns: Array<PaginatorColumn> = [
    { name: '名称', value: 'name' },
    { name: '创建时间', value: 'createdAt' },
  ];

  displayedColumns = ['name', 'category', 'code', 'createdAt', 'intro', 'remark', 'operate',];
  dataSource: PgmElet[] = [];

  constructor(private router: Router,
    private dialog: MatDialog,
    private notifyServ: NotifyService,
    private hostServ: ProgramService,private authServ: AuthService,) { }

  ngOnInit() {
    this.onResetClick();
    this.authServ.log('查看程序管理页面', '无');
  }

  onAddClick(): void {
    const e: PgmElet = {
      id: '', name: '', category: PgmCategory.other, code: '', intro: '', createdAt: null, remark: ''
    };
    const dialogRef = this.dialog.open(DialogProgramComponent,
      { width: '520px', data: e, });

    dialogRef.afterClosed().subscribe(result => {
      if (result?.op === 'save' && result?.e) {
        this.notifyServ.notify(`程序【${e.name}】信息保存成功！！！`, 'success');
        this.onSearchClick();
      }
    });
  }

  onSearchClick(): void {
    this.params.filter = this.dto;
    this.params.pageIndex = 1;
    this._loadData(this.params);
  }

  onResetClick(): void {
    this.dto = new PgmFilter();
    this.params.filter = this.dto;
    this.params.pageIndex = 1;
    this.params.pageSize = 10;
    this.params.sortColumn = this.columnOp;
    this.columnOp = 'createdAt';
    this._loadData(this.params);
  }

  onConfigClick(e: PgmElet): void {
    this.router.navigate([`/program/detail/${e.id}/${e.category}/${e.name}`]);
  }

  onCustomerClick(e: PgmElet): void {
    this.router.navigate([`/program/customer/${e.id}/${e.category}/${e.name}`]);
  }

  onEditClick(e: PgmElet): void {
    const dialogRef = this.dialog.open(DialogProgramComponent,
      { width: '520px', data: e, });

    dialogRef.afterClosed().subscribe(result => {
      if (result?.op === 'save' && result?.e)
        this.notifyServ.notify(`程序【${e.name}】信息更新成功！！！`, 'success');
      this.onSearchClick();
    });
  }

  onDeleteClick(e: PgmElet): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '260px',
      data: `确定要删除【${e.name}】程序吗？`,
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

  private _loadData(params: PagingParameter<PgmFilter>): void {
    this.hostServ.serach(params).subscribe({
      next: res => { this._renderInfo(res); },
      error: err => {
        const msg = `数据加载失败！！！ ${err}`;
        this.notifyServ.notify(msg, 'error');
      }
    });
  }

  private _renderInfo(res: ResponsePagingResult<PgmElet>): void {
    if (res.success) {
      this.total = res.rowsCount;
      this.dataSource = res.data;
    } else {
      const msg = `数据加载失败！！！ ${res.allMessages}`;
      this.notifyServ.notify(msg, 'error');
    }
  }

  private _delete(e: PgmElet): void {
    this.hostServ.delete(e.id as string).subscribe({
      next: res => {
        if (res.success) {
          this.notifyServ.notify(`程序【${e.name}】已删除！！！`, 'success');
          this.onSearchClick()
        } else {
          const msg = `程序【${e.name}】删除失败！！！ ${res.allMessages}`;
          this.notifyServ.notify(msg, 'error');
        }
      },
      error: err => {
        const msg = `程序【${e.name}】删除失败！！！ ${err}`;
        this.notifyServ.notify(msg, 'error');
      }
    });
  }

}

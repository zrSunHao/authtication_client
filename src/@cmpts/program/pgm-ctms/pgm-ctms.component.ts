import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { PagingParameter, ResponsePagingResult } from 'src/@sun/models/paging.model';
import { PgmCtmElet, PgmCtmFilter } from 'src/@sun/models/program.model';
import { ConfirmDialogComponent } from 'src/@sun/shared/cmpts/confirm-dialog/confirm-dialog.component';
import { NotifyService } from 'src/@sun/shared/services/notify.service';
import { ProgramService } from '../program.service';

@Component({
  selector: 'app-pgm-ctms',
  templateUrl: './pgm-ctms.component.html',
  styleUrls: ['./pgm-ctms.component.scss']
})
export class PgmCtmsComponent implements OnInit {

  programId: string = '';
  programType: string = '';
  programName: string = '';

  ownedCtms: PgmCtmElet[] = [];
  ownedTotal = 0;
  ownedParam = new PagingParameter<PgmCtmFilter>();
  notOwnedCtms: PgmCtmElet[] = [];
  notOwnedTotal = 0;
  notOwnedParam = new PagingParameter<PgmCtmFilter>();

  constructor(private router: Router,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private notifyServ: NotifyService,
    private hostServ: ProgramService,) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.programId = params['id'];
      this.programName = params['name'];
      const category = params['category'];
      switch (category) {
        case '1':
          this.programType = '网页端';
          break;
        case '2':
          this.programType = '桌面端';
          break;
        case '3':
          this.programType = '移动端';
          break;
        case '4':
          this.programType = '服务端';
          break;
        default:
          this.programType = '';
          break;
      }
      const filter = new PgmCtmFilter();
      filter.pgmId = this.programId;
      this.ownedParam.filter = filter;
      this.notOwnedParam.filter = filter;
      this._loadOwnedCtmList(this.ownedParam);
      this._loadNotOwnedCtmList(this.notOwnedParam);
    })
  }

  onPreviousPageClick(): void {
    this.router.navigate([`/program`]);
  }

  onAddCtmClick(e: PgmCtmElet): void {
    this.hostServ.addCtm(this.programId, e.id as string).subscribe({
      next: res => {
        if (res.success) {
          this.notifyServ.notify(`关联用户【${e.name}】成功！！！`, 'success');
          this.notOwnedCtms = this.notOwnedCtms.filter(x => x.id != e.id);
          this._loadOwnedCtmList(this.ownedParam);
        } else {
          const msg = `关联用户【${e.name}】失败！！！ ${res.allMessages}`;
          this.notifyServ.notify(msg, 'error');
        }
      },
      error: err => {
        const msg = `关联用户【${e.name}】失败！！！ ${err}`;
        this.notifyServ.notify(msg, 'error');
      }
    });
  }

  onDeleteCtmClick(e: PgmCtmElet): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '260px',
      data: `确定要取消用户【${e.name}】的关联吗？`,
    });

    dialogRef.afterClosed().subscribe((result: string) => {
      if (result === 'yes') this._delete(e);
    });
  }

  onGetOwnedCtmList(param: PagingParameter<PgmCtmFilter>): void {
    this.ownedParam = param;
    this._loadOwnedCtmList(param);
  }

  onGetNotOwnedCtmList(param: PagingParameter<PgmCtmFilter>): void {
    this.notOwnedParam = param;
    this._loadNotOwnedCtmList(param);
  }

  private _loadOwnedCtmList(param: PagingParameter<PgmCtmFilter>): void {
    if (!param.filter) param.filter = new PgmCtmFilter();
    param.filter.pgmId = this.programId;
    this.ownedCtms = [];
    this.ownedTotal = 0;
    this.hostServ.getOwnedCtmList(param).subscribe({
      next: res => { this._renderSOwnedCtmData(res); },
      error: err => {
        const msg = `关联用户数据加载失败！！！ ${err}`;
        this.notifyServ.notify(msg, 'error');
      }
    });
  }

  private _loadNotOwnedCtmList(param: PagingParameter<PgmCtmFilter>): void {
    if (!param.filter) param.filter = new PgmCtmFilter();
    param.filter.pgmId = this.programId;
    this.notOwnedTotal = 0;
    this.notOwnedCtms = [];
    this.hostServ.getNotOwnedCtmList(param).subscribe({
      next: res => { this._renderNotOwnedCtmData(res); },
      error: err => {
        const msg = `未关联用户数据加载失败！！！ ${err}`;
        this.notifyServ.notify(msg, 'error');
      }
    });
  }

  private _renderSOwnedCtmData(res: ResponsePagingResult<PgmCtmElet>): void {
    if (res.success) {
      this.ownedTotal = res.rowsCount;
      this.ownedCtms = res.data as PgmCtmElet[];
    } else {
      const msg = `模块数据加载失败！！！ ${res.allMessages}`;
      this.notifyServ.notify(msg, 'error');
    }
  }

  private _renderNotOwnedCtmData(res: ResponsePagingResult<PgmCtmElet>): void {
    if (res.success) {
      this.notOwnedTotal = res.rowsCount;
      this.notOwnedCtms = res.data as PgmCtmElet[];
    } else {
      const msg = `功能数据加载失败！！！ ${res.allMessages}`;
      this.notifyServ.notify(msg, 'error');
    }
  }

  private _delete(e: PgmCtmElet): void {
    this.hostServ.deleteCtm(this.programId, e.id as string).subscribe({
      next: res => {
        if (res.success) {
          this.notifyServ.notify(`已删除用户【${e.name}】关联！！！`, 'success');
          this.ownedCtms = this.ownedCtms.filter(x => x.id != e.id);
          this._loadNotOwnedCtmList(this.notOwnedParam);
        } else {
          const msg = `删除用户【${e.name}】关联失败！！！ ${res.allMessages}`;
          this.notifyServ.notify(msg, 'error');
        }
      },
      error: err => {
        const msg = `删除用户【${e.name}】关联失败！！！ ${err}`;
        this.notifyServ.notify(msg, 'error');
      }
    });
  }
}

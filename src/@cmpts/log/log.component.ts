import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserLogElet, UserLogFilter } from 'src/@sun/models/auth.model';
import { OptionItem, PagingParameter, ResponsePagingResult } from 'src/@sun/models/paging.model';
import { Paginator, PaginatorColumn } from 'src/@sun/shared/cmpts/paginator/paginator.component';
import { AuthService } from 'src/@sun/shared/services/auth.service';
import { NotifyService } from 'src/@sun/shared/services/notify.service';
import { DialogLogDetailComponent } from './dialog-log-detail/dialog-log-detail.component';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss']
})
export class LogComponent implements OnInit {

  dto: UserLogFilter = new UserLogFilter();
  params = new PagingParameter<UserLogFilter>();
  sysOptions: OptionItem[] = [];

  total = 0;
  columnOp = 'createdAt';
  columns: Array<PaginatorColumn> = [
    { name: '创建时间', value: 'createdAt' },
  ];

  displayedColumns = ['ctmName', 'ctmNickname', 'operate', 'sysName', 'remoteAddress', 'createdAt', 'remark', 'myoperate',];
  dataSource: Array<UserLogElet> = [];

  constructor(private dialog: MatDialog,
    private notifyServ: NotifyService,
    private authServ: AuthService,) {
  }

  ngOnInit() {
    this.onResetClick();
    this._loadSystemItems();
    this.authServ.log('进入日志查看页面', `无`);
  }

  onSearchClick(): void {
    this.params.filter = this.dto;
    this._loadData(this.params);
  }

  onResetClick(): void {
    this.dto = new UserLogFilter();
    this.params.filter = this.dto;
    this.params.pageIndex = 1;
    this.params.pageSize = 10;
    this.params.sortColumn = this.columnOp;
    this.columnOp = 'createdAt';
    this._loadData(this.params);
  }

  onDetailClick(e: UserLogElet): void {
    const dialogRef = this.dialog.open(DialogLogDetailComponent,
      { width: '520px', data: e, });

  }

  onPaginatorChange(paginator: Paginator) {
    this.params.filter = this.dto;
    this.params.pageIndex = paginator.pageIndex;
    this.params.pageSize = paginator.pageSize;
    this.params.sortColumn = paginator.column;
    this.params.sort = paginator.sort;
    this._loadData(this.params);
  }

  private _loadData(params: PagingParameter<UserLogFilter>) {
    this.authServ.getLogList(params).subscribe({
      next: res => { this._renderInfo(res); },
      error: err => {
        const msg = `数据加载失败！！！ ${err}`;
        this.notifyServ.notify(msg, 'error');
      }
    });
  }

  private _renderInfo(res: ResponsePagingResult<UserLogElet>) {
    if (res.success) {
      this.total = res.rowsCount;
      this.dataSource = res.data;
    } else {
      const msg = `数据加载失败！！！ ${res.allMessages}`;
      this.notifyServ.notify(msg, 'error');
    }
  }

  private _loadSystemItems() {
    this.authServ.getSystemItems().subscribe({
      next: res => {
        if (res.success) {
          this.sysOptions = res.data as OptionItem[];
        } else {
          const msg = `系统信息加载失败！！！ ${res.allMessages}`;
          this.notifyServ.notify(msg, 'error');
        }
      },
      error: err => {
        const msg = `系统信息加载失败！！！ ${err}`;
        this.notifyServ.notify(msg, 'error');
      }
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { OptionItem, PagingParameter, ResponsePagingResult } from 'src/@sun/models/paging.model';
import { Paginator, PaginatorColumn } from 'src/@sun/shared/cmpts/paginator/paginator.component';
import { NotifyService } from 'src/@sun/shared/services/notify.service';
import { CustomerService } from '../customer.service';
import { DialogCustomerComponent } from '../dialog-customer/dialog-customer.component';
import { CtmElet, CtmFilter, CUSTOMER_ELEMENT_DATA } from '../../../@sun/models/customer.model';
import { CTT_METHOD_OPS } from 'src/@sun/models/constraint.model';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  dto: CtmFilter = new CtmFilter();
  params = new PagingParameter<CtmFilter>();
  methodOps: OptionItem[] = CTT_METHOD_OPS;
  
  total = 0;
  columnOp = 'lastLoginAt';
  columns: Array<PaginatorColumn> = [
    { name: '账号', value: 'name' },
    { name: '昵称', value: 'nickname' },
    { name: '约束', value: 'limited' },
    { name: '最近登陆时间', value: 'lastLoginAt' },
    { name: '注册时间', value: 'createdAt' },
  ];

  displayedColumns = ['avatar', 'name', 'nickname', 'limited', 'lastLoginAt', 'remark', 'operate',];
  dataSource: CtmElet[] = [];

  constructor(private dialog: MatDialog,
    private router: Router,
    private notifyServ: NotifyService,
    private hostServ: CustomerService) {
  }

  ngOnInit() {
    this.onResetClick();
  }

  onSearchClick(): void {
    this.params.filter = this.dto;
    this._loadData(this.params);
  }

  onResetClick(): void {
    this.dto = new CtmFilter();
    this.params.filter = this.dto;
    this.params.pageIndex = 1;
    this.params.pageSize = 10;
    this.params.sortColumn = this.columnOp;
    this.columnOp = 'createdAt';
    this._loadData(this.params);
  }

  onPaginatorChange(paginator: Paginator) {
    this.params.filter = this.dto;
    this.params.pageIndex = paginator.pageIndex;
    this.params.pageSize = paginator.pageSize;
    this.params.sortColumn = paginator.column;
    this.params.sort = paginator.sort;
    this._loadData(this.params);
  }

  onDetailClick(e: CtmElet): void {
    this.router.navigate([`/customer/detail/${e.id}/${e.name}`]);
  }

  onRemarkClick(e: CtmElet): void {
    const dialogRef = this.dialog.open(DialogCustomerComponent, {
      width: '360px',
      data: e,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result?.op === 'save') {
        e.remark = result.remark;
        this.notifyServ.notify(`备注成功！！！`, 'success');
      }
    });
  }

  private _loadData(params: PagingParameter<CtmFilter>) {
    this.hostServ.search(params).subscribe({
      next: res => { this._renderInfo(res); },
      error: err => {
        const msg = `数据加载失败！！！ ${err}`;
        this.notifyServ.notify(msg, 'error');
        this.dataSource = CUSTOMER_ELEMENT_DATA; // TODO 删除
        this.total = 35; // TODO 删除
      }
    });
  }

  private _renderInfo(res: ResponsePagingResult<CtmElet>) {
    if (res.success) {
      this.total = res.rowsCount;
      this.dataSource = res.data;
    } else {
      const msg = `数据加载失败！！！ ${res.allMessages}`;
      this.notifyServ.notify(msg, 'error');
    }
  }

}

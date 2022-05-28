import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { OptionItem, PagingParameter, ResponsePagingResult } from 'src/@sun/models/paging.model';
import { Paginator, PaginatorColumn } from 'src/@sun/shared/cmpts/paginator/paginator.component';
import { NotifyService } from 'src/@sun/shared/services/notify.service';
import { CtmRoleElet, CtmRoleFilter, CUSTOMER_ROLE_ELEMENT_DATA } from 'src/@sun/models/customer.model';

import { MyService } from '../my.service';
import { ROLE_RANK_OPS } from 'src/@sun/models/system.model';

@Component({
  selector: 'app-customer-roles',
  templateUrl: './customer-roles.component.html',
  styleUrls: ['./customer-roles.component.scss']
})
export class CustomerRolesComponent implements OnInit {

  dto: CtmRoleFilter = new CtmRoleFilter();
  params = new PagingParameter<CtmRoleFilter>();
  rankOps: OptionItem[] = ROLE_RANK_OPS;

  @Input() customerId: string = '';

  total = 0;
  pageSize: 5 | 10 | 20 | 50 = 5;
  columnOp = 'createdAt';
  columns: Array<PaginatorColumn> = [
    { name: '系统名称', value: 'sysName' },
    { name: '角色名称', value: 'roleName' },
    { name: '角色等级', value: 'roleRank' },
    { name: '关联时间', value: 'createdAt' },
  ];

  displayedColumns = ['sysLogo', 'sysName', 'roleName', 'rank', 'createdAt', 'remark',];
  dataSource: CtmRoleElet[] = [];

  constructor(private dialog: MatDialog,
    private notifyServ: NotifyService,
    private hostServ: MyService) {
  }

  ngOnInit() {
    this.onResetClick();
  }

  onSearchClick(): void {
    this.dto.customerId = this.customerId;
    this.params.filter = this.dto;
    this.params.pageSize = this.pageSize;
    this._loadData(this.params);
  }

  onResetClick(): void {
    this.dto = new CtmRoleFilter();
    this.dto.customerId = this.customerId;
    this.params.filter = this.dto;
    this.params.pageIndex = 1;
    this.params.pageSize = this.pageSize;
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

  private _loadData(params: PagingParameter<CtmRoleFilter>) {
    this.hostServ.searchRoles(params).subscribe({
      next: res => { this._renderInfo(res); },
      error: err => {
        const msg = `角色数据加载失败！！！ ${err}`;
        this.notifyServ.notify(msg, 'error');
        this.dataSource = CUSTOMER_ROLE_ELEMENT_DATA; // TODO 删除
        this.total = 35; // TODO 删除
      }
    });
  }

  private _renderInfo(res: ResponsePagingResult<CtmRoleElet>) {
    if (res.success) {
      this.total = res.rowsCount;
      this.dataSource = res.data;
    } else {
      const msg = `角色数据加载失败！！！ ${res.allMessages}`;
      this.notifyServ.notify(msg, 'error');
    }
  }

}

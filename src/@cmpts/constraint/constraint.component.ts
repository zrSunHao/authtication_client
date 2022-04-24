import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfirmDialogComponent } from 'src/@sun/shared/cmpts/confirm-dialog/confirm-dialog.component';
import { IconSnackBarComponent } from 'src/@sun/shared/cmpts/icon-snack-bar/icon-snack-bar.component';
import { Paginator, PaginatorColumn } from 'src/@sun/shared/cmpts/paginator/paginator.component';
import { NotifyService } from 'src/@sun/shared/services/notify.service';
import { ConstraintElement, CONSTRAINT_ELEMENT_DATA } from './model';

@Component({
  selector: 'app-constraint',
  templateUrl: './constraint.component.html',
  styleUrls: ['./constraint.component.scss']
})
export class ConstraintComponent implements OnInit {

  name: string = '';
  category: '' | '1' | '2' | '3' | '4' = '';
  introOrRemark: string = '';
  startAt: Date | null = null;
  endAt: Date | null = null;

  total = 35;
  columnOp = 'createdAt';
  columns: Array<PaginatorColumn> = [
    { name: '类别', value: 'category' },
    { name: '方式', value: 'method' },
    { name: '到期时间', value: 'expiredAt' },
    { name: '创建时间', value: 'createdAt' },
  ];

  displayedColumns = ['category', 'method', 'userName', 'sysName', 'functionName', 'expiredAt', 'origin', 'createdAt', 'remark', 'operate',];
  dataSource = CONSTRAINT_ELEMENT_DATA;

  constructor(private dialog: MatDialog, private notifySer: NotifyService) { }

  ngOnInit() {
  }

  paginatorChange(paginator: Paginator) {
    console.log(paginator);
  }

  onSearchClick(): void {
    this.notifySer.notify('数据加载成功！！！', 'success');
  }

  onResetClick(): void {
    this.name = '';
    this.category = '';
    this.introOrRemark = '';
    this.startAt = null;
    this.endAt = null;
    this.onSearchClick();
  }

  onCancelClick(e: ConstraintElement): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '260px',
      data: `确定要删除该约束吗？`,
    });

    dialogRef.afterClosed().subscribe((result: string) => {
      if (result === 'yes') {
        this.notifySer.notify('约束取消成功！！！', 'success');
      }
    });
  }

}

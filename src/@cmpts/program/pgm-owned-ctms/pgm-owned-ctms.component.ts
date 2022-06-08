import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { PagingParameter } from 'src/@sun/models/paging.model';
import { PgmCtmElet, PgmCtmFilter } from 'src/@sun/models/program.model';

@Component({
  selector: 'app-pgm-owned-ctms',
  templateUrl: './pgm-owned-ctms.component.html',
  styleUrls: ['./pgm-owned-ctms.component.scss']
})
export class PgmOwnedCtmsComponent implements OnInit, OnChanges {

  displayedColumns = ['avatar', 'name', 'nickname', 'createdAt', 'intro', 'operate',];
  dto: PgmCtmFilter = new PgmCtmFilter();

  @Input() data: PgmCtmElet[] = [];
  @Input() total: number = 0;
  @Output() onDeleteCtms: EventEmitter<PgmCtmElet> = new EventEmitter<PgmCtmElet>();
  @Output() onGetCtms: EventEmitter<PagingParameter<PgmCtmFilter>> = new EventEmitter<PagingParameter<PgmCtmFilter>>();

  count = 1;
  pageIndex = 1;
  pageSize = 10;
  previousDisabled = false;
  nextDisabled = false;

  constructor() { }

  ngOnInit() {
    this.btnStatus();
  }

  ngOnChanges(changes: any) {
    this.btnStatus();
  }

  onGetClick(): void {
    this.btnStatus();
    const param = new PagingParameter<PgmCtmFilter>();
    param.pageIndex = this.pageIndex;
    param.pageSize = this.pageSize;
    param.filter = this.dto;
    this.onGetCtms.emit(param);
  }

  onResetClick(): void {
    this.pageIndex = 1;
    this.dto = new PgmCtmFilter();
    this.onGetClick();
  }

  onDeleteClick(e: PgmCtmElet): void {
    this.onDeleteCtms.emit(e);
    this.btnStatus();
  }

  previousPage(): void {
    if (this.pageIndex > 1) {
      this.pageIndex--;
      this.onGetClick();
    }
  }

  nextPage(): void {
    let count = Math.ceil(this.total / this.pageSize);
    if (this.pageIndex < count) {
      this.pageIndex++;
      this.onGetClick();
    }
  }

  btnStatus() {
    if (this.pageIndex <= 1) {
      this.previousDisabled = true;
    } else {
      this.previousDisabled = false;
    }
    this.count = Math.ceil(this.total / this.pageSize);
    if (this.pageIndex >= this.count) {
      this.nextDisabled = true;
    } else {
      this.nextDisabled = false;
    }
  }
}

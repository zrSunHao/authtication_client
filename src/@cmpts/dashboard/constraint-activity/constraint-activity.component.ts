import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CttElet, CTT_CATEGERY_OPS, CTT_METHOD_OPS } from 'src/@sun/models/constraint.model';
import { OptionItem } from 'src/@sun/models/paging.model';

@Component({
  selector: 'app-constraint-activity',
  templateUrl: './constraint-activity.component.html',
  styleUrls: ['./constraint-activity.component.scss']
})
export class ConstraintActivityComponent implements OnInit {

  displayedColumns = ['id', 'category', 'method', 'userName', 'sysName', 'functionName', 'expiredAt', 'origin', 'createdAt', 'remark',];
  @Input() dataSource: CttElet[] = [];
  @Output() onRefesh: EventEmitter<any> = new EventEmitter<any>();

  categeryOps: OptionItem[] = CTT_CATEGERY_OPS;
  methodOps: OptionItem[] = CTT_METHOD_OPS;

  constructor() { }

  ngOnInit() {
  }

  onRefeshClick() {
    this.onRefesh.emit();
  }

}

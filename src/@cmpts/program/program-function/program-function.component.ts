import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CTT_METHOD_OPS } from 'src/@sun/models/constraint.model';
import { OptionItem } from 'src/@sun/models/paging.model';
import { FunctElet } from 'src/@sun/models/program.model';

@Component({
  selector: 'app-program-function',
  templateUrl: './program-function.component.html',
  styleUrls: ['./program-function.component.scss']
})
export class ProgramFunctionComponent implements OnInit {

  methodOps: OptionItem[] = CTT_METHOD_OPS;
  displayedColumns = ['name', 'code', 'cttMethod', 'limitedExpiredAt', 'remark', 'operate',];

  @Input() sectionName: string = 'xxx xxx'
  @Input() data: FunctElet[] = [];
  @Input() title: string = '';

  @Output() onEdit: EventEmitter<FunctElet> = new EventEmitter<FunctElet>();
  @Output() onDelete: EventEmitter<FunctElet> = new EventEmitter<FunctElet>();

  constructor() { }

  ngOnInit() {
  }

  onEditClick(e: FunctElet): void {
    this.onEdit.emit(e);
  }

  onDeleteClick(e: FunctElet): void {
    this.onDelete.emit(e);
  }

}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FunctionElement } from '../model';

@Component({
  selector: 'app-program-function',
  templateUrl: './program-function.component.html',
  styleUrls: ['./program-function.component.scss']
})
export class ProgramFunctionComponent implements OnInit {

  displayedColumns = ['name', 'code', 'constraint', 'limitedExpireAt', 'remark', 'operate',];

  @Input() sectionName: string = 'xxx xxx'
  @Input() data: FunctionElement[] = [];

  @Output() onEdit: EventEmitter<FunctionElement> = new EventEmitter<FunctionElement>();
  @Output() onDelete: EventEmitter<FunctionElement> = new EventEmitter<FunctionElement>();

  constructor() { }

  ngOnInit() {
  }

  onEditClick(e: FunctionElement): void {
    this.onEdit.emit(e);
  }

  onDeleteClick(e: FunctionElement): void {
    this.onDelete.emit(e);
  }

}

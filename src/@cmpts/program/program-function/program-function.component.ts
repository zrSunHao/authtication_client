import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FunctionElement, FUNCTION_ELEMENT_DATA } from '../model';

@Component({
  selector: 'app-program-function',
  templateUrl: './program-function.component.html',
  styleUrls: ['./program-function.component.scss']
})
export class ProgramFunctionComponent implements OnInit {

  displayedColumns = ['name', 'code', 'constraint', 'limitedExpireAt', 'remark', 'operate',];

  @Input() sectionName: string = 'xxx xxx'
  @Input() data: FunctionElement[] = FUNCTION_ELEMENT_DATA;

  @Output() onLimit: EventEmitter<FunctionElement> = new EventEmitter<FunctionElement>();
  @Output() onEdit: EventEmitter<FunctionElement> = new EventEmitter<FunctionElement>();
  @Output() onDelete: EventEmitter<FunctionElement> = new EventEmitter<FunctionElement>();

  constructor() { }

  ngOnInit() {
  }

  onLimitClick(e: FunctionElement): void {
    this.onLimit.emit(e);
  }

  onEditClick(e: FunctionElement): void {
    this.onEdit.emit(e);
  }

  onDeleteClick(e: FunctionElement): void {
    this.onDelete.emit(e);
  }

}

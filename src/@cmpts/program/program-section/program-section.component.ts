import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SectElet } from 'src/@sun/models/program.model';

@Component({
  selector: 'app-program-section',
  templateUrl: './program-section.component.html',
  styleUrls: ['./program-section.component.scss']
})
export class ProgramSectionComponent implements OnInit {

  @Input() selectedSection: SectElet | null = null;
  @Input() data: Array<SectElet> = [];
  @Input() title: string = '';

  @Output() onSelect: EventEmitter<SectElet> = new EventEmitter<SectElet>();
  @Output() onAddFunction: EventEmitter<SectElet> = new EventEmitter<SectElet>();
  @Output() onEdit: EventEmitter<SectElet> = new EventEmitter<SectElet>();
  @Output() onDelete: EventEmitter<SectElet> = new EventEmitter<SectElet>();

  constructor() { }

  ngOnInit() {
  }

  onSelectClick(e: SectElet): void {
    this.onSelect.emit(e);
  }

  onAddFunctionClick(e: SectElet): void {
    this.onAddFunction.emit(e);
  }

  onEditClick(e: SectElet): void {
    this.onEdit.emit(e);
  }

  onDeleteClick(e: SectElet): void {
    this.onDelete.emit(e);
  }

}


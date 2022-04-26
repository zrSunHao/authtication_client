import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SectionElement } from '../model';

@Component({
  selector: 'app-program-section',
  templateUrl: './program-section.component.html',
  styleUrls: ['./program-section.component.scss']
})
export class ProgramSectionComponent implements OnInit {

  @Input() selectedSection: SectionElement | null = null;
  @Input() data: Array<SectionElement> = [];

  @Output() onSelect: EventEmitter<SectionElement> = new EventEmitter<SectionElement>();
  @Output() onAddFunction: EventEmitter<SectionElement> = new EventEmitter<SectionElement>();
  @Output() onEdit: EventEmitter<SectionElement> = new EventEmitter<SectionElement>();
  @Output() onDelete: EventEmitter<SectionElement> = new EventEmitter<SectionElement>();

  constructor() { }

  ngOnInit() {
  }

  onSelectClick(e: SectionElement): void {
    this.onSelect.emit(e);
  }

  onAddFunctionClick(e: SectionElement): void {
    this.onAddFunction.emit(e);
  }

  onEditClick(e: SectionElement): void {
    this.onEdit.emit(e);
  }

  onDeleteClick(e: SectionElement): void {
    this.onDelete.emit(e);
  }

}


import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SectionElement, SECTION_ELEMENT_DATA } from '../model';

@Component({
  selector: 'app-program-section',
  templateUrl: './program-section.component.html',
  styleUrls: ['./program-section.component.scss']
})
export class ProgramSectionComponent implements OnInit {

  selectedId: string = '';

  @Input() data: Array<SectionElement> = SECTION_ELEMENT_DATA;

  @Output() onSelect: EventEmitter<SectionElement> = new EventEmitter<SectionElement>();
  @Output() onEdit: EventEmitter<SectionElement> = new EventEmitter<SectionElement>();
  @Output() onDelete: EventEmitter<SectionElement> = new EventEmitter<SectionElement>();

  constructor() { }

  ngOnInit() {
    this.selectedId = this.data[0].id as string;
  }

  onSelectClick(e: SectionElement): void {
    this.selectedId = e.id as string;
    this.onSelect.emit(e);
  }

  onEditClick(e: SectionElement): void {
    this.selectedId = e.id as string;
    this.onEdit.emit(e);
  }

  onDeleteClick(e: SectionElement): void {
    this.onDelete.emit(e);
  }

}


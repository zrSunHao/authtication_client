import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProgramElement, PROGRAM_ELEMENT_DATA, SystemProgramSearchDto } from '../model';

@Component({
  selector: 'app-system-section',
  templateUrl: './system-section.component.html',
  styleUrls: ['./system-section.component.scss']
})
export class SystemSectionComponent implements OnInit {

  dto: SystemProgramSearchDto = new SystemProgramSearchDto();

  @Input() data: ProgramElement[] = PROGRAM_ELEMENT_DATA;
  @Output() onAddProgram: EventEmitter<ProgramElement> = new EventEmitter<ProgramElement>();
  @Output() onGetPrograms: EventEmitter<SystemProgramSearchDto> = new EventEmitter<SystemProgramSearchDto>();

  constructor() { }

  ngOnInit() {
  }

  onGetClick(): void {
    this.onGetPrograms.emit(this.dto);
  }

  onResetClick(): void {
    this.dto = new SystemProgramSearchDto();
    this.onGetPrograms.emit(this.dto);
  }

  onAddClick(e: ProgramElement): void {
    this.onAddProgram.emit(e);
  }
}

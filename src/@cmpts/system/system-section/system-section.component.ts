import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SysPgmElet, PROGRAM_ELEMENT_DATA, SysPgmSearchDto } from '../../../@sun/models/system.model';

@Component({
  selector: 'app-system-section',
  templateUrl: './system-section.component.html',
  styleUrls: ['./system-section.component.scss']
})
export class SystemSectionComponent implements OnInit {

  dto: SysPgmSearchDto = new SysPgmSearchDto();

  @Input() data: SysPgmElet[] = PROGRAM_ELEMENT_DATA;
  @Output() onAddProgram: EventEmitter<SysPgmElet> = new EventEmitter<SysPgmElet>();
  @Output() onGetPrograms: EventEmitter<SysPgmSearchDto> = new EventEmitter<SysPgmSearchDto>();

  constructor() { }

  ngOnInit() {
  }

  onGetClick(): void {
    this.onGetPrograms.emit(this.dto);
  }

  onResetClick(): void {
    this.dto = new SysPgmSearchDto();
    this.onGetPrograms.emit(this.dto);
  }

  onAddClick(e: SysPgmElet): void {
    this.onAddProgram.emit(e);
  }
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SysPgmElet, PROGRAM_ELEMENT_DATA, SysPgmFilter } from '../../../@sun/models/system.model';

@Component({
  selector: 'app-system-section',
  templateUrl: './system-section.component.html',
  styleUrls: ['./system-section.component.scss']
})
export class SystemSectionComponent implements OnInit {

  dto: SysPgmFilter = new SysPgmFilter();

  @Input() data: SysPgmElet[] = PROGRAM_ELEMENT_DATA;
  @Output() onAddProgram: EventEmitter<SysPgmElet> = new EventEmitter<SysPgmElet>();
  @Output() onGetPrograms: EventEmitter<SysPgmFilter> = new EventEmitter<SysPgmFilter>();

  constructor() { }

  ngOnInit() {
  }

  onGetClick(): void {
    this.onGetPrograms.emit(this.dto);
  }

  onResetClick(): void {
    this.dto = new SysPgmFilter();
    this.onGetPrograms.emit(this.dto);
  }

  onAddClick(e: SysPgmElet): void {
    this.onAddProgram.emit(e);
  }
}

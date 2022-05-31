import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { OptionItem } from 'src/@sun/models/paging.model';
import { PGM_TYPE_OPS } from 'src/@sun/models/program.model';
import { SysPgmElet, SysNotOwnedPgmFilter } from '../../../@sun/models/system.model';

@Component({
  selector: 'app-system-section',
  templateUrl: './system-section.component.html',
  styleUrls: ['./system-section.component.scss']
})
export class SystemSectionComponent implements OnInit {

  dto: SysNotOwnedPgmFilter = new SysNotOwnedPgmFilter();
  typeOps: OptionItem[] = PGM_TYPE_OPS;

  @Input() data: SysPgmElet[] = [];
  @Output() onAddProgram: EventEmitter<SysPgmElet> = new EventEmitter<SysPgmElet>();
  @Output() onGetPrograms: EventEmitter<SysNotOwnedPgmFilter> = new EventEmitter<SysNotOwnedPgmFilter>();

  constructor() { }

  ngOnInit() {
  }

  onGetClick(): void {
    this.onGetPrograms.emit(this.dto);
  }

  onResetClick(): void {
    this.dto = new SysNotOwnedPgmFilter();
    this.onGetPrograms.emit(this.dto);
  }

  onAddClick(e: SysPgmElet): void {
    this.onAddProgram.emit(e);
  }
}

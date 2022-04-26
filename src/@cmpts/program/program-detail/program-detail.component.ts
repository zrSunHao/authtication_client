import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { NotifyService } from 'src/@sun/shared/services/notify.service';
import { FunctionElement, FUNCTION_ELEMENT_DATA, SectionElement, SECTION_ELEMENT_DATA } from '../model';
import { ProgramFunctionComponent } from '../program-function/program-function.component';
import { ProgramSectionComponent } from '../program-section/program-section.component';
import { ProgramService } from '../program.service';

@Component({
  selector: 'app-program-detail',
  templateUrl: './program-detail.component.html',
  styleUrls: ['./program-detail.component.scss']
})
export class ProgramDetailComponent implements OnInit {

  programId: string = '';
  programType: string = '';
  programName: string = '';

  sections: SectionElement[] = SECTION_ELEMENT_DATA;
  functions: Array<FunctionElement> = FUNCTION_ELEMENT_DATA;

  @ViewChild('sectCmpt')
  sectCmpt!: ProgramSectionComponent;
  @ViewChild('funcCmpt')
  funcCmpt!: ProgramFunctionComponent;

  constructor(private router: Router, private route: ActivatedRoute,
    private dialog: MatDialog,
    private notifyServ: NotifyService,
    private hostServ: ProgramService,) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.programId = params['id'];
      this.programType = params['type'];
      this.programName = params['name'];
      this._loadSectionData(this.programId);
    })
  }

  onResetClick(): void {

  }

  onAddSectionClick(): void {

  }

  onSelectSectionClick(e: SectionElement): void {

  }

  onAddFunctionClick(e: SectionElement): void {

  }

  onEditSectionClick(e: SectionElement): void {

  }

  onDeleteSectionClick(e: SectionElement): void {

  }

  onLimitFunctionClick(e: FunctionElement): void {

  }

  onEditFunctionClick(e: FunctionElement): void {

  }

  onDeleteFunctionClick(e: FunctionElement): void {

  }

  private _loadSectionData(programId: string): void {

  }

  private _loadFunctionData(sectionId: string): void {

  }

}

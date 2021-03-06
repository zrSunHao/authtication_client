import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';

import { ResponseResult } from 'src/@sun/models/paging.model';
import { NotifyService } from 'src/@sun/shared/services/notify.service';
import { ConfirmDialogComponent } from 'src/@sun/shared/cmpts/confirm-dialog/confirm-dialog.component';
import { DialogSectionComponent } from '../dialog-section/dialog-section.component';

import { DialogFunctionComponent } from '../dialog-function/dialog-function.component';
import { ProgramFunctionComponent } from '../program-function/program-function.component';
import { ProgramSectionComponent } from '../program-section/program-section.component';
import { ProgramService } from '../program.service';
import { FunctElet, SectElet } from 'src/@sun/models/program.model';
import { CttMethod } from 'src/@sun/models/constraint.model';
import { AuthService } from 'src/@sun/shared/services/auth.service';

@Component({
  selector: 'app-program-detail',
  templateUrl: './program-detail.component.html',
  styleUrls: ['./program-detail.component.scss']
})
export class ProgramDetailComponent implements OnInit {

  programId: string = '';
  programType: string = '';
  programName: string = '';
  sectionsTitle: string = '';

  selectedSection: SectElet | null = null;
  selectedSectName: string = '';
  sections: SectElet[] = [];
  functions: FunctElet[] = [];

  @ViewChild('sectCmpt')
  sectCmpt!: ProgramSectionComponent;
  @ViewChild('funcCmpt')
  funcCmpt!: ProgramFunctionComponent;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private notifyServ: NotifyService,
    private authServ: AuthService,
    private hostServ: ProgramService,) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.programId = params['id'];
      this.programName = params['name'];
      const category = params['category'];
      switch (category) {
        case '1':
          this.programType = '?????????';
          this.sectionsTitle = '??????';
          break;
        case '2':
          this.programType = '?????????';
          this.sectionsTitle = '??????';
          break;
        case '3':
          this.programType = '?????????';
          this.sectionsTitle = '??????';
          break;
        case '4':
          this.programType = '?????????';
          this.sectionsTitle = '??????';
          break;
        default:
          this.programType = '';
          this.sectionsTitle = '??????/??????';
          break;
      }
      this._loadSectionData(this.programId);
      this.authServ.log('??????????????????????????????', `????????????[${this.programId}]`);
    })
  }

  onPreviousPageClick(): void {
    this.router.navigate([`/program`]);
  }

  onSelectSectionClick(e: SectElet): void {
    if (e?.id !== this.selectedSection?.id) {
      this.functions = [];
      this.selectedSection = e;
      this.selectedSectName = e.name;
      this._loadFunctionData(e.id as string)
    }
  }

  onAddSectionClick(): void {
    const e: SectElet = {
      id: '', name: '', pgmId: this.programId, code: '', remark: ''
    };
    const dialogRef = this.dialog.open(DialogSectionComponent,
      { width: '360px', data: e, });

    dialogRef.afterClosed().subscribe(result => {
      if (result?.op === 'save' && result?.e) {
        this.notifyServ.notify(`?????????${e.name}??????????????????????????????`, 'success');
        this._loadSectionData(this.programId);
      }
    });
  }

  onFlushCache() {
    this.hostServ.flushCache(this.programId).subscribe({
      next: res => {
        if (res.success) {
          this.notifyServ.notify(`???????????????????????????`, 'success');
        } else {
          const msg = `??????????????????????????? ${res.allMessages}`;
          this.notifyServ.notify(msg, 'error');
        }
      },
      error: err => {
        const msg = `??????????????????????????? ${err}`;
        this.notifyServ.notify(msg, 'error');
      }
    });
  }

  onEditSectionClick(e: SectElet): void {
    const newE: SectElet = {
      id: e.id, name: e.name, pgmId: e.pgmId, code: e.code, remark: e.remark
    };
    const dialogRef = this.dialog.open(DialogSectionComponent,
      { width: '360px', data: newE, });

    dialogRef.afterClosed().subscribe(result => {
      if (result?.op === 'save' && result?.e) {
        this.notifyServ.notify(`?????????${newE.name}??????????????????????????????`, 'success');
        e.name = newE.name;
        e.code = newE.code;
        e.remark = newE.remark;
      }
    });
  }

  onDeleteSectionClick(e: SectElet): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '260px',
      data: `??????????????????${e.name}???????????????`,
    });

    dialogRef.afterClosed().subscribe((result: string) => {
      if (result === 'yes') this._deleteSection(e);
    });
  }

  onAddFunctionClick(e: SectElet): void {
    const f: FunctElet = {
      id: '', pgmId: this.programId, sectId: e.id as string, name: '', code: '', cttMethod: CttMethod.other, limitedExpiredAt: null, remark: ''
    };
    const dialogRef = this.dialog.open(DialogFunctionComponent,
      { width: '520px', data: f, });

    dialogRef.afterClosed().subscribe(result => {
      if (result?.op === 'save' && result?.e) {
        this.notifyServ.notify(`?????????${e.name}??????????????????????????????`, 'success');
        if (this.selectedSection?.id === e.id)
          this._loadFunctionData(e.id as string);
      }
    });
  }

  onEditFunctionClick(e: FunctElet): void {
    const f: FunctElet = {
      id: e.id, pgmId: e.pgmId, sectId: e.sectId, name: e.name, code: e.code, cttMethod: e.cttMethod, limitedExpiredAt: e.limitedExpiredAt, remark: e.remark
    };
    const dialogRef = this.dialog.open(DialogFunctionComponent,
      { width: '520px', data: f, });

    dialogRef.afterClosed().subscribe(result => {
      if (result?.op === 'save' && result?.e) {
        e.name = f.name;
        e.code = f.code;
        e.cttMethod = f.cttMethod;
        e.limitedExpiredAt = f.limitedExpiredAt;
        e.remark = f.remark;
        this.notifyServ.notify(`?????????${e.name}??????????????????????????????`, 'success');
        this._loadFunctionData(this.selectedSection?.id as string);
      }
    });
  }

  onDeleteFunctionClick(e: FunctElet): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '260px',
      data: `??????????????????${e.name}???????????????`,
    });

    dialogRef.afterClosed().subscribe((result: string) => {
      if (result === 'yes') this._deleteFunction(e);
    });
  }

  private _loadSectionData(programId: string): void {
    this.hostServ.getSections(programId).subscribe({
      next: res => { this._renderSectionData(res); },
      error: err => {
        const msg = `????????????????????????????????? ${err}`;
        this.notifyServ.notify(msg, 'error');
      }
    });
  }

  private _loadFunctionData(sectionId: string): void {
    this.hostServ.getFunctions(sectionId).subscribe({
      next: res => { this._renderFunctionData(res); },
      error: err => {
        const msg = `????????????????????????????????? ${err}`;
        this.notifyServ.notify(msg, 'error');
      }
    });
  }

  private _renderSectionData(res: ResponseResult<SectElet[]>): void {
    if (res.success) {
      this.sections = res.data as SectElet[];
    } else {
      const msg = `????????????????????????????????? ${res.allMessages}`;
      this.notifyServ.notify(msg, 'error');
    }
  }

  private _renderFunctionData(res: ResponseResult<FunctElet[]>): void {
    if (res.success) {
      this.functions = res.data as FunctElet[];
    } else {
      const msg = `????????????????????????????????? ${res.allMessages}`;
      this.notifyServ.notify(msg, 'error');
    }
  }

  private _deleteSection(e: SectElet): void {
    this.hostServ.deleteSection(e.id as string).subscribe({
      next: res => {
        if (res.success) {
          this.notifyServ.notify(`???${e.name}??????????????????????????????`, 'success');
          this.selectedSection = null;
          this.functions = [];
          this.sections = this.sections.filter(x => x.id != e.id);
        } else {
          const msg = `???${e.name}?????????????????????????????? ${res.allMessages}`;
          this.notifyServ.notify(msg, 'error');
        }
      },
      error: err => {
        const msg = `???${e.name}?????????????????????????????? ${err}`;
        this.notifyServ.notify(msg, 'error');
      }
    });
  }

  private _deleteFunction(e: FunctElet): void {
    this.hostServ.deleteFunction(e.id as string).subscribe({
      next: res => {
        if (res.success) {
          this.notifyServ.notify(`???${e.name}??????????????????????????????`, 'success');
          this.functions = this.functions.filter(x => x.id != e.id);
        } else {
          const msg = `???${e.name}?????????????????????????????? ${res.allMessages}`;
          this.notifyServ.notify(msg, 'error');
        }
      },
      error: err => {
        const msg = `???${e.name}?????????????????????????????? ${err}`;
        this.notifyServ.notify(msg, 'error');
      }
    });
  }

}

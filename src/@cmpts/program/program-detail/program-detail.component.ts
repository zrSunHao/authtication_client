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
import { FunctElet, FUNCTION_ELEMENT_DATA, SectElet, SECTION_ELEMENT_DATA } from '../../../@sun/models/program.model';

@Component({
  selector: 'app-program-detail',
  templateUrl: './program-detail.component.html',
  styleUrls: ['./program-detail.component.scss']
})
export class ProgramDetailComponent implements OnInit {

  programId: string = '';
  programType: string = '';
  programName: string = '';

  selectedSection: SectElet | null = null;
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
    private hostServ: ProgramService,) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.programId = params['id'];
      this.programName = params['name'];
      switch (params['type']) {
        case '1':
          this.programType = '网页端';
          break;
        case '2':
          this.programType = '桌面端';
          break;
        case '3':
          this.programType = '移动端';
          break;
        case '4':
          this.programType = '服务端';
          break;
        default:
          this.programType = '';
          break;
      }

      this._loadSectionData(this.programId);
    })
  }

  onPreviousPageClick(): void {
    this.router.navigate([`/program`]);
  }

  onSelectSectionClick(e: SectElet): void {
    if (e?.id !== this.selectedSection?.id) {
      this.functions = [];
      this.selectedSection = e;
      this._loadFunctionData(e.id as string)
    }
  }

  onAddSectionClick(): void {
    const e: SectElet = {
      id: '', name: '', programId: this.programId, code: '', remark: ''
    };
    const dialogRef = this.dialog.open(DialogSectionComponent,
      { width: '360px', data: e, });

    dialogRef.afterClosed().subscribe(result => {
      if (result?.op === 'save' && result?.e) {
        this.notifyServ.notify(`模块【${e.name}】信息保存成功！！！`, 'success');
        this._loadSectionData(this.programId);
      }
    });
  }

  onEditSectionClick(e: SectElet): void {
    const newE: SectElet = {
      id: e.id, name: e.name, programId: e.programId, code: e.code, remark: e.remark
    };
    const dialogRef = this.dialog.open(DialogSectionComponent,
      { width: '360px', data: newE, });

    dialogRef.afterClosed().subscribe(result => {
      if (result?.op === 'save' && result?.e) {
        this.notifyServ.notify(`模块【${newE.name}】信息更新成功！！！`, 'success');
        e.name = newE.name;
        e.code = newE.code;
        e.remark = newE.remark;
      }
    });
  }

  onDeleteSectionClick(e: SectElet): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '260px',
      data: `确定要删除【${e.name}】模块吗？`,
    });

    dialogRef.afterClosed().subscribe((result: string) => {
      if (result === 'yes') this._deleteSection(e);
    });
  }

  onAddFunctionClick(e: SectElet): void {
    const f: FunctElet = {
      id: '', programId: this.programId, sectionId: e.id as string, name: '', code: '', constraint: '', limitedExpireAt: null, remark: ''
    };
    const dialogRef = this.dialog.open(DialogFunctionComponent,
      { width: '520px', data: f, });

    dialogRef.afterClosed().subscribe(result => {
      if (result?.op === 'save' && result?.e) {
        this.notifyServ.notify(`功能【${e.name}】信息保存成功！！！`, 'success');
        if (this.selectedSection?.id === e.id)
          this._loadFunctionData(e.id as string);
      }
    });
  }

  onEditFunctionClick(e: FunctElet): void {
    const f: FunctElet = {
      id: e.id, programId: e.programId, sectionId: e.sectionId, name: e.name, code: e.code, constraint: e.constraint, limitedExpireAt: e.limitedExpireAt, remark: e.remark
    };
    const dialogRef = this.dialog.open(DialogFunctionComponent,
      { width: '520px', data: f, });

    dialogRef.afterClosed().subscribe(result => {
      if (result?.op === 'save' && result?.e) {
        e.name = f.name;
        e.code = f.code;
        e.constraint = f.constraint;
        e.limitedExpireAt = f.limitedExpireAt;
        e.remark = f.remark;
        this.notifyServ.notify(`功能【${e.name}】信息更新成功！！！`, 'success');
      }
    });
  }

  onDeleteFunctionClick(e: FunctElet): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '260px',
      data: `确定要删除【${e.name}】功能吗？`,
    });

    dialogRef.afterClosed().subscribe((result: string) => {
      if (result === 'yes') this._deleteFunction(e);
    });
  }

  private _loadSectionData(programId: string): void {
    this.hostServ.getSections(programId).subscribe({
      next: res => { this._renderSectionData(res); },
      error: err => {
        this.sections = SECTION_ELEMENT_DATA; // TODO 待删除
        const msg = `模块数据加载失败！！！ ${err}`;
        this.notifyServ.notify(msg, 'error');
      }
    });
  }

  private _loadFunctionData(sectionId: string): void {
    this.hostServ.getFunctions(sectionId).subscribe({
      next: res => { this._renderFunctionData(res); },
      error: err => {
        this.functions = FUNCTION_ELEMENT_DATA; // TODO 待删除
        const msg = `功能数据加载失败！！！ ${err}`;
        this.notifyServ.notify(msg, 'error');
      }
    });
  }

  private _renderSectionData(res: ResponseResult<SectElet[]>): void {
    if (res.success) {
      this.sections = res.data as SectElet[];
    } else {
      this.sections = SECTION_ELEMENT_DATA; // TODO 待删除
      const msg = `模块数据加载失败！！！ ${res.allMessages}`;
      this.notifyServ.notify(msg, 'error');
    }
  }

  private _renderFunctionData(res: ResponseResult<FunctElet[]>): void {
    if (res.success) {
      this.functions = res.data as FunctElet[];
    } else {
      this.functions = FUNCTION_ELEMENT_DATA; // TODO 待删除
      const msg = `功能数据加载失败！！！ ${res.allMessages}`;
      this.notifyServ.notify(msg, 'error');
    }
  }

  private _deleteSection(e: SectElet): void {
    this.hostServ.deleteSection(e.id as string).subscribe({
      next: res => {
        if (res.success) {
          this.notifyServ.notify(`【${e.name}】模块删除成功！！！`, 'success');
          this.selectedSection = null;
          this.functions = [];
          this.sections = this.sections.filter(x => x.id != e.id);
        } else {
          const msg = `【${e.name}】模块删除失败！！！ ${res.allMessages}`;
          this.notifyServ.notify(msg, 'error');
        }
      },
      error: err => {
        const msg = `【${e.name}】模块删除失败！！！ ${err}`;
        this.notifyServ.notify(msg, 'error');
      }
    });
  }

  private _deleteFunction(e: FunctElet): void {
    this.hostServ.deleteFunction(e.id as string).subscribe({
      next: res => {
        if (res.success) {
          this.notifyServ.notify(`【${e.name}】功能删除成功！！！`, 'success');
          this.functions = this.functions.filter(x => x.id != e.id);
        } else {
          const msg = `【${e.name}】功能删除失败！！！ ${res.allMessages}`;
          this.notifyServ.notify(msg, 'error');
        }
      },
      error: err => {
        const msg = `【${e.name}】功能删除失败！！！ ${err}`;
        this.notifyServ.notify(msg, 'error');
      }
    });
  }

}

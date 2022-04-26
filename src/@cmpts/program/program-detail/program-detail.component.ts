import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';

import { ResponseResult } from 'src/@sun/models/paging.model';
import { NotifyService } from 'src/@sun/shared/services/notify.service';
import { ConfirmDialogComponent } from 'src/@sun/shared/cmpts/confirm-dialog/confirm-dialog.component';
import { DialogSectionComponent } from '../dialog-section/dialog-section.component';

import { DialogFunctionComponent } from '../dialog-function/dialog-function.component';
import { ProgramFunctionComponent } from '../program-function/program-function.component';
import { ProgramSectionComponent } from '../program-section/program-section.component';
import { ProgramService } from '../program.service';
import { FunctionElement, FUNCTION_ELEMENT_DATA, SectionElement, SECTION_ELEMENT_DATA } from '../model';

@Component({
  selector: 'app-program-detail',
  templateUrl: './program-detail.component.html',
  styleUrls: ['./program-detail.component.scss']
})
export class ProgramDetailComponent implements OnInit {

  programId: string = '';
  programType: string = '';
  programName: string = '';

  selectedSection: SectionElement | null = null;
  sections: SectionElement[] = [];
  functions: FunctionElement[] = [];

  @ViewChild('sectCmpt')
  sectCmpt!: ProgramSectionComponent;
  @ViewChild('funcCmpt')
  funcCmpt!: ProgramFunctionComponent;

  constructor(private route: ActivatedRoute,
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

  onSelectSectionClick(e: SectionElement): void {
    if (e?.id !== this.selectedSection?.id) {
      this.functions = [];
      this.selectedSection = e;
      this._loadFunctionData(e.id as string)
    }
  }

  onAddSectionClick(): void {
    const e: SectionElement = {
      id: '', name: '', programId: this.programId, code: '', remark: ''
    };
    const dialogRef = this.dialog.open(DialogSectionComponent,
      { width: '360px', data: e, });

    dialogRef.afterClosed().subscribe(result => {
      if (result?.op === 'save' && result?.e) this._addSection(result?.e);
    });
  }

  onEditSectionClick(e: SectionElement): void {
    const newE: SectionElement = {
      id: e.id, name: e.name, programId: e.programId, code: e.code, remark: e.remark
    };
    const dialogRef = this.dialog.open(DialogSectionComponent,
      { width: '360px', data: newE, });

    dialogRef.afterClosed().subscribe(result => {
      if (result?.op === 'save' && result?.e) this._editSection(result?.e, e);
    });
  }

  onDeleteSectionClick(e: SectionElement): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '260px',
      data: `确定要删除【${e.name}】模块吗？`,
    });

    dialogRef.afterClosed().subscribe((result: string) => {
      if (result === 'yes') this._deleteSection(e);
    });
  }

  onAddFunctionClick(e: SectionElement): void {
    const f: FunctionElement = {
      id: '', programId: this.programId, sectionId: e.id as string, name: '', code: '', constraint: '', limitedExpireAt: null, remark: ''
    };
    const dialogRef = this.dialog.open(DialogFunctionComponent,
      { width: '520px', data: f, });

    dialogRef.afterClosed().subscribe(result => {
      if (result?.op === 'save' && result?.e) this._addFunction(result?.e);
    });
  }

  onEditFunctionClick(e: FunctionElement): void {
    const f: FunctionElement = {
      id: e.id, programId: e.programId, sectionId: e.sectionId, name: e.name, code: e.code, constraint: e.constraint, limitedExpireAt: e.limitedExpireAt, remark: e.remark
    };
    const dialogRef = this.dialog.open(DialogFunctionComponent,
      { width: '520px', data: f, });

    dialogRef.afterClosed().subscribe(result => {
      if (result?.op === 'save' && result?.e) this._editFunction(result?.e, e);
    });
  }

  onDeleteFunctionClick(e: FunctionElement): void {
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

  private _renderSectionData(res: ResponseResult<SectionElement[]>): void {
    if (res.success) {
      this.sections = res.data as SectionElement[];
    } else {
      this.sections = SECTION_ELEMENT_DATA; // TODO 待删除
      const msg = `模块数据加载失败！！！ ${res.allMessages}`;
      this.notifyServ.notify(msg, 'error');
    }
  }

  private _renderFunctionData(res: ResponseResult<FunctionElement[]>): void {
    if (res.success) {
      this.functions = res.data as FunctionElement[];
    } else {
      this.functions = FUNCTION_ELEMENT_DATA; // TODO 待删除
      const msg = `功能数据加载失败！！！ ${res.allMessages}`;
      this.notifyServ.notify(msg, 'error');
    }
  }

  private _addSection(e: SectionElement): void {
    this.hostServ.addSection(e).subscribe({
      next: res => {
        if (res.success) {
          this.notifyServ.notify(`模块【${e.name}】信息保存成功！！！`, 'success');
          this.sections = [e, ...this.sections]

        } else {
          const msg = `模块【${e.name}】信息保存失败！！！ ${res.allMessages}`;
          this.notifyServ.notify(msg, 'error');
        }
      },
      error: err => {
        const msg = `模块【${e.name}】信息保存失败！！！ ${err}`;
        this.notifyServ.notify(msg, 'error');
      }
    });
  }

  private _editSection(newE: SectionElement, oldE: SectionElement): void {
    this.hostServ.updateSection(newE).subscribe({
      next: res => {
        if (res.success) {
          this.notifyServ.notify(`模块【${newE.name}】信息更新成功！！！`, 'success');
          oldE.name = newE.name;
          oldE.code = newE.code;
          oldE.remark = newE.remark;
        } else {
          const msg = `模块【${newE.name}】信息保存失败！！！ ${res.allMessages}`;
          this.notifyServ.notify(msg, 'error');
        }
      },
      error: err => {
        const msg = `模块【${newE.name}】信息保存失败！！！ ${err}`;
        this.notifyServ.notify(msg, 'error');
      }
    });
  }

  private _deleteSection(e: SectionElement): void {
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

  private _addFunction(e: FunctionElement): void {
    this.hostServ.addFunction(e).subscribe({
      next: res => {
        if (res.success) {
          this.notifyServ.notify(`功能【${e.name}】信息保存成功！！！`, 'success');
          if (this.selectedSection?.id === e.sectionId)
            this.functions = [e, ...this.functions]
        } else {
          const msg = `功能【${e.name}】信息保存失败！！！ ${res.allMessages}`;
          this.notifyServ.notify(msg, 'error');
        }
      },
      error: err => {
        const msg = `功能【${e.name}】信息保存失败！！！ ${err}`;
        this.notifyServ.notify(msg, 'error');
      }
    });
  }

  private _editFunction(newE: FunctionElement, oldE: FunctionElement): void {
    this.hostServ.updateFunction(newE).subscribe({
      next: res => {
        if (res.success) {
          this.notifyServ.notify(`功能【${newE.name}】信息更新成功！！！`, 'success');
          oldE.name = newE.name;
          oldE.code = newE.code;
          oldE.constraint = newE.constraint;
          oldE.limitedExpireAt = newE.limitedExpireAt;
          oldE.remark = newE.remark;
        } else {
          const msg = `功能【${newE.name}】信息保存失败！！！ ${res.allMessages}`;
          this.notifyServ.notify(msg, 'error');
        }
      },
      error: err => {
        const msg = `功能【${newE.name}】信息保存失败！！！ ${err}`;
        this.notifyServ.notify(msg, 'error');
      }
    });
  }

  private _deleteFunction(e: FunctionElement): void {
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

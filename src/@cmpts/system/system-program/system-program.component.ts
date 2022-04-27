import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ConfirmDialogComponent } from 'src/@sun/shared/cmpts/confirm-dialog/confirm-dialog.component';
import { NotifyService } from 'src/@sun/shared/services/notify.service';
import { ProgramElement, PROGRAM_ELEMENT_DATA, SystemProgramGetDto, SystemProgramSearchDto } from '../model';
import { SystemService } from '../system.service';

@Component({
  selector: 'app-system-program',
  templateUrl: './system-program.component.html',
  styleUrls: ['./system-program.component.scss']
})
export class SystemProgramComponent implements OnInit {

  dto: SystemProgramGetDto = new SystemProgramGetDto();

  sysId: string = '';
  sysName: string = '';

  sections: ProgramElement[] = [];
  displayedColumns = ['name', 'type', 'code', 'intro', 'remark', 'operate',];
  programs: ProgramElement[] = [];

  constructor(private route: ActivatedRoute,
    private dialog: MatDialog,
    private notifyServ: NotifyService,
    private hostServ: SystemService,) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.sysId = params['sysId'];
      this.sysName = params['sysName'];
    });
    this.onSearchProgramsClick(new SystemProgramSearchDto());
    this.onGetProgramsClick();
  }

  onSearchProgramsClick(e: SystemProgramSearchDto): void {
    e.systemId = this.sysId;
    this.hostServ.searchPrograms(e).subscribe({
      next: res => {
        if (res.success) {
          this.sections = res.data as ProgramElement[];
        } else {
          const msg = `未关联程序的数据加载失败！！！ ${res.allMessages}`;
          this.notifyServ.notify(msg, 'error');
        }
      },
      error: err => {
        const msg = `未关联程序的数据加载失败！！！ ${err}`;
        this.notifyServ.notify(msg, 'error');
        this.sections = PROGRAM_ELEMENT_DATA; // TODO待删除
      }
    });
  }

  onAddProgramClick(e: ProgramElement): void {
    e.systemId = this.sysId;
    this.hostServ.addProgram(e.systemId as string, e.id as string).subscribe({
      next: res => {
        if (res.success) {
          this.notifyServ.notify(`程序【${e.name}】关联成功！！！`, 'success');
          this.sections = this.sections.filter(x => x.id != e.id);
          this.programs = [e, ...this.programs];
        } else {
          const msg = `程序【${e.name}】关联失败！！！ ${res.allMessages}`;
          this.notifyServ.notify(msg, 'error');
        }
      },
      error: err => {
        const msg = `程序【${e.name}】关联失败！！！ ${err}`;
        this.notifyServ.notify(msg, 'error');
      }
    });
  }

  onGetProgramsClick(): void {
    this.dto.systemId = this.sysId;
    this.hostServ.getPrograms(this.dto).subscribe({
      next: res => {
        if (res.success) {
          this.programs = res.data as ProgramElement[];
        } else {
          const msg = `关联程序的数据加载失败！！！ ${res.allMessages}`;
          this.notifyServ.notify(msg, 'error');
        }
      },
      error: err => {
        const msg = `关联程序的数据加载失败！！！ ${err}`;
        this.notifyServ.notify(msg, 'error');
        this.programs = PROGRAM_ELEMENT_DATA; // TODO待删除
      }
    });
  }

  onResetProgramClick(): void {
    this.dto = new SystemProgramGetDto();
    this.onGetProgramsClick();
  }

  onDeleteProgramClick(e: ProgramElement): void {
    e.systemId = this.sysId;
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '260px',
      data: `确定要删除程序【${e.name}】的关联吗？`,
    });

    dialogRef.afterClosed().subscribe((result: string) => {
      if (result === 'yes') this._delete(e);
    });
  }

  private _delete(e: ProgramElement): void {
    this.hostServ.deleteProgram(e.systemId as string, e.id as string).subscribe({
      next: res => {
        if (res.success) {
          this.notifyServ.notify(`程序【${e.name}】关联已删除！！！`, 'success');
          this.programs = this.programs.filter(x => x.id != e.id);
        } else {
          const msg = `程序【${e.name}】关联删除失败！！！ ${res.allMessages}`;
          this.notifyServ.notify(msg, 'error');
        }
      },
      error: err => {
        const msg = `程序【${e.name}】关联删除失败！！！ ${err}`;
        this.notifyServ.notify(msg, 'error');
      }
    });
  }

}

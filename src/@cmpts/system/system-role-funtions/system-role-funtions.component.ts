import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotifyService } from 'src/@sun/shared/services/notify.service';
import { SysRoleFunctElet, SysRoleRelation, SysRolePgmElet, ROLE_SECTION_ELEMENT_DATA, SysRoleSectElet } from '../../../@sun/models/system.model';
import { SystemService } from '../system.service';

@Component({
  selector: 'app-system-role-funtions',
  templateUrl: './system-role-funtions.component.html',
  styleUrls: ['./system-role-funtions.component.scss']
})
export class SystemRoleFuntionsComponent implements OnInit {

  roleId: string = '';
  roleName: string = '';

  displayedColumns = ['name', 'functs'];
  programs: SysRolePgmElet[] = [];

  constructor(private route: ActivatedRoute,
    private notifyServ: NotifyService,
    private hostServ: SystemService,) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.roleId = params['roleId'];
      this.roleName = params['roleName'];
    });
    this.onLoadData();
  }

  onLoadData(): void {
    this.hostServ.getRoleFunctions(this.roleId).subscribe({
      next: res => {
        if (res.success) {
          this.programs = res.data as SysRolePgmElet[];
        } else {
          const msg = `功能权限数据加载失败！！！ ${res.allMessages}`;
          this.notifyServ.notify(msg, 'error');
        }
      },
      error: err => {
        const msg = `功能权限数据加载失败！！！ ${err}`;
        this.notifyServ.notify(msg, 'error');
        this.programs = ROLE_SECTION_ELEMENT_DATA; // TODO待删除
      }
    });
  }

  onPreviousPageClick(): void {
    history.back();
  }

  onSectionChange(e: SysRoleSectElet): void {
    if (e.checked) {
      // e.functs.forEach(f => {
      //   f.checked = true;
      // });
    } else {
      e.functs.forEach(f => {
        f.checked = false;
      });
    }
  }

  onFunctionChange(e: SysRoleFunctElet): void {
    const p = this.programs.find(x => x.id == e.pgmId);
    if (p) {
      const s = p.sects.find(x => x.id == e.sectId);
      // if (s) {
      //   let flag = true; //全不选
      //   s.functs.forEach(f => {
      //     if (f.checked) flag = false;
      //   });
      //   s.checked = !flag;
      // }
      if (s && e.checked) s.checked = true;
    }
  }

  onSaveClick(e: SysRolePgmElet) {
    const s = e.sects.filter(x => x.checked).map(x => x.id);
    let f: string[] = [];
    e.sects.forEach(x => {
      if (x.checked) {
        const t = x.functs.filter(x => x.checked).map(x => x.id);
        f = [...f, ...t];
      }
    });

    const dto = new SysRoleRelation();
    dto.roleId = this.roleId;
    dto.pgmId = e.id;
    dto.sectIds = s;
    dto.functIds = f;
    console.info(dto);

    this.hostServ.addRoleFunctions(dto).subscribe({
      next: res => {
        if (res.success) {
          this.notifyServ.notify(`程序【${e.name}】的权限关联成功！！！`, 'success');
        } else {
          const msg = `程序【${e.name}】的权限关联失败！！！ ${res.allMessages}`;
          this.notifyServ.notify(msg, 'error');
        }
      },
      error: err => {
        const msg = `程序【${e.name}】的权限关联失败！！！ ${err}`;
        this.notifyServ.notify(msg, 'error');
      }
    });
  }

}

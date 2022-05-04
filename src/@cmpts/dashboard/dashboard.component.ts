import { Component, OnInit } from '@angular/core';
import { CONSTRAINT_ELEMENT_DATA, CttElet } from 'src/@sun/models/constraint.model';
import { NotifyService } from 'src/@sun/shared/services/notify.service';
import { DashboardService } from './dashboard.service';
import { ReportCtmElet, CUSTOMER_ELEMENT_DATA, ReportLogElet, LOG_ELEMENT_DATA, WidgetElet } from '../../@sun/models/report.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  customers: ReportCtmElet[] = [];
  logs: ReportLogElet[] = [];
  constraints: CttElet[] = [];
  widgets: Array<WidgetElet> = [];

  constructor(private notifyServ: NotifyService,
    private hostServ: DashboardService,) { }

  ngOnInit() {
    this.onLoadCustomers();
    this.onLoadLogs();
    this.onLoadConstraints();
    this._loadWidgets();
  }

  onLoadCustomers(): void {
    this.hostServ.getCustomers().subscribe({
      next: res => {
        if (res.success) {
          this.customers = res.data as ReportCtmElet[];
        } else {
          const msg = `客户数据加载失败！！！ ${res.allMessages}`;
          this.notifyServ.notify(msg, 'error');
        }
      },
      error: err => {
        const msg = `客户数据加载失败！！！ ${err}`;
        this.notifyServ.notify(msg, 'error');
        this.customers = CUSTOMER_ELEMENT_DATA; // TODO待删除
      }
    });
  }

  onLoadLogs(): void {
    this.hostServ.getLogs().subscribe({
      next: res => {
        if (res.success) {
          this.logs = res.data as ReportLogElet[];
        } else {
          const msg = `日志数据加载失败！！！ ${res.allMessages}`;
          this.notifyServ.notify(msg, 'error');
        }
      },
      error: err => {
        const msg = `日志数据加载失败！！！ ${err}`;
        this.notifyServ.notify(msg, 'error');
        this.logs = LOG_ELEMENT_DATA; // TODO待删除
      }
    });
  }

  onLoadConstraints(): void {
    this.hostServ.getConstraints().subscribe({
      next: res => {
        if (res.success) {
          this.constraints = res.data as CttElet[];
        } else {
          const msg = `约束数据加载失败！！！ ${res.allMessages}`;
          this.notifyServ.notify(msg, 'error');
        }
      },
      error: err => {
        const msg = `约束数据加载失败！！！ ${err}`;
        this.notifyServ.notify(msg, 'error');
        this.constraints = CONSTRAINT_ELEMENT_DATA; // TODO待删除
      }
    });
  }

  private _loadWidgets(): void {
    this.hostServ.getWidgets().subscribe({
      next: res => {
        if (res.success) {
          this.widgets = res.data as WidgetElet[];
        } else {
          const msg = `模块数据加载失败！！！ ${res.allMessages}`;
          this.notifyServ.notify(msg, 'error');
        }
      },
      error: err => {
        const msg = `模块数据加载失败！！！ ${err}`;
        this.notifyServ.notify(msg, 'error');
        this.widgets = [
          { title: '126名客户', icon: 'customer.png', color: 'primary' },
          { title: '17个系统', icon: 'app.png', color: 'accent' },
          { title: '99个程序', icon: 'program.png', color: 'accent' },
          { title: '11111个约束', icon: 'constraint.png', color: 'warn' },
        ]; // TODO待删除
      }
    });
  }

}

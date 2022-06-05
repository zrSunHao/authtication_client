import { Component, OnInit } from '@angular/core';
import { CttElet } from 'src/@sun/models/constraint.model';
import { NotifyService } from 'src/@sun/shared/services/notify.service';
import { DashboardService } from './dashboard.service';
import { ReportCtmElet, ReportLogElet, WidgetElet } from '../../@sun/models/report.model';

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
      }
    });
  }

}

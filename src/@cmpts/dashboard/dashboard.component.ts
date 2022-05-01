import { Component, OnInit } from '@angular/core';
import { NotifyService } from 'src/@sun/shared/services/notify.service';
import { DashboardService } from './dashboard.service';
import { ConstraintElement, CONSTRAINT_ELEMENT_DATA, CustomerElement, CUSTOMER_ELEMENT_DATA, LogElement, LOG_ELEMENT_DATA, WidgetElement } from './model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  customers: CustomerElement[] = [];
  logs: LogElement[] = [];
  constraints: ConstraintElement[] = [];
  widgets: Array<WidgetElement> = [];

  constructor(private notifyServ: NotifyService,
    private hostServ: DashboardService,) { }

  ngOnInit() {
    this._loadCustomers();
    this._loadLogs();
    this._loadConstraints();
    this._loadWidgets();
  }

  private _loadCustomers(): void {
    this.hostServ.getCustomers().subscribe({
      next: res => {
        if (res.success) {
          this.customers = res.data as CustomerElement[];
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

  private _loadLogs(): void {
    this.hostServ.getLogs().subscribe({
      next: res => {
        if (res.success) {
          this.logs = res.data as LogElement[];
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

  private _loadConstraints(): void {
    this.hostServ.getConstraints().subscribe({
      next: res => {
        if (res.success) {
          this.constraints = res.data as ConstraintElement[];
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
          this.widgets = res.data as WidgetElement[];
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
          { title: '17个应用', icon: 'app.png', color: 'accent' },
          { title: '99个程序（20|79）', icon: 'program.png', color: 'accent' },
          { title: '11111个有效约束', icon: 'constraint.png', color: 'warn' },
        ]; // TODO待删除
      }
    });
  }

}

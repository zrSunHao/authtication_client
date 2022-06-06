import { Component, Input, OnInit } from '@angular/core';
import { WidgetElet } from 'src/@sun/models/report.model';

@Component({
  selector: 'app-widget-activity',
  templateUrl: './widget-activity.component.html',
  styleUrls: ['./widget-activity.component.scss']
})
export class WidgetActivityComponent implements OnInit {

  @Input() info: WidgetElet = { msg: '', icon: '', color: '' };

  constructor() { }

  ngOnInit() {
  }

}

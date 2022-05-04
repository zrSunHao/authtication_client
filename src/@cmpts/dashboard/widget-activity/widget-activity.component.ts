import { Component, Input, OnInit } from '@angular/core';
import { WidgetElet } from '../../../@sun/models/report.model';

@Component({
  selector: 'app-widget-activity',
  templateUrl: './widget-activity.component.html',
  styleUrls: ['./widget-activity.component.scss']
})
export class WidgetActivityComponent implements OnInit {

  @Input() msg: WidgetElet = { title: '', icon: '', color: '' };

  constructor() { }

  ngOnInit() {
  }

}

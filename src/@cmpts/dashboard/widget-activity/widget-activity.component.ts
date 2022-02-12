import { Component, Input, OnInit } from '@angular/core';
import { Widget } from '../model';

@Component({
  selector: 'app-widget-activity',
  templateUrl: './widget-activity.component.html',
  styleUrls: ['./widget-activity.component.scss']
})
export class WidgetActivityComponent implements OnInit {

  @Input() msg: Widget = { title: '', icon: '', color: '' };

  constructor() { }

  ngOnInit() {
  }

}

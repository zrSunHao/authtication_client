import { Component, Input, OnInit } from '@angular/core';
import { WidgetElement } from '../model';

@Component({
  selector: 'app-widget-activity',
  templateUrl: './widget-activity.component.html',
  styleUrls: ['./widget-activity.component.scss']
})
export class WidgetActivityComponent implements OnInit {

  @Input() msg: WidgetElement = { title: '', icon: '', color: '' };

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-people-info',
  templateUrl: './people-info.component.html',
  styleUrls: ['./people-info.component.scss']
})
export class PeopleInfoComponent implements OnInit {

  form: FormGroup;
  dateDisabled = false;
  edit = false;

  constructor() {
    this.form = new FormGroup({
      fullName: new FormControl(null, [Validators.required, Validators.pattern(/^[\u4E00-\u9FA5A-Za-z0-9_]{2,16}$/)]),
      gender: new FormControl(null, [Validators.required]),
      birthday: new FormControl(null, [Validators.required]),
      education: new FormControl(null, [Validators.required]),
      profession: new FormControl(null, [Validators.maxLength(32)]),
      intro: new FormControl(null, [Validators.maxLength(256)]),
    });
  }

  ngOnInit() {
    this.form.disable();
    this.dateDisabled = true;
  }

  onEditClick() {
    this.form.enable();
    this.dateDisabled = false;
    this.form.controls['birthday'].disable();
    this.edit = true;
  }
  onSaveClick() {
    this.form.disable();
    this.dateDisabled = true;
    this.edit = false;
  }
  onCancelClick() {
    this.form.disable();
    this.dateDisabled = true;
    this.edit = false;
    //初始化信息时备份数据
    //取消时根据备份重新赋值
    //保存时更新备份
  }
}

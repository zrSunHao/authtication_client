import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { NotifyService } from 'src/@sun/shared/services/notify.service';
import { PeopleElement } from 'src/@cmpts/customer/model';

import { MyService } from '../my.service';

@Component({
  selector: 'app-people-info',
  templateUrl: './people-info.component.html',
  styleUrls: ['./people-info.component.scss']
})

export class PeopleInfoComponent implements OnInit {

  @Input() customerId: string = '';
  form: FormGroup;
  dateDisabled = false;
  edit = false;
  people: PeopleElement = {
    id: '',
    customerId: '',
    fullName: '',
    gender: '1',
    birthday: new Date(),
    education: '',
    profession: '',
    intro: ''
  };

  constructor(private notifyServ: NotifyService,
    private hostServ: MyService,) {
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
    this._loadData();
  }

  onEditClick() {
    this.form.enable();
    this.dateDisabled = false;
    this.form.controls['birthday'].disable();
    this.edit = true;
  }

  onSaveClick() {
    const p: PeopleElement = {
      id: '', customerId: '', fullName: '', gender: '1',
      birthday: new Date(), education: '', profession: '', intro: ''
    };
    this._formMapToElement(p);
    this.hostServ.updatePeople(p).subscribe({
      next: res => {
        if (res.success) {
          const msg = `个人信息保存成功！！！ ${res.allMessages}`;
          this.notifyServ.notify(msg, 'success');
          this._elementMapToForm();
          this.form.disable();
          this.dateDisabled = true;
          this.edit = false;
        } else {
          const msg = `个人信息保存失败！！！ ${res.allMessages}`;
          this.notifyServ.notify(msg, 'error');
        }
      },
      error: err => {
        const msg = `个人信息保存失败！！！ ${err}`;
        this.notifyServ.notify(msg, 'error');
      }
    });
  }

  onCancelClick(): void {
    this.form.disable();
    this.dateDisabled = true;
    this.edit = false;
    this._elementMapToForm();
  }

  private _loadData() {
    this.hostServ.getPeopleById(this.customerId).subscribe({
      next: res => {
        if (res.success) {
          this.people = res.data as PeopleElement;
        } else {
          const msg = `个人信息加载失败！！！ ${res.allMessages}`;
          this.notifyServ.notify(msg, 'error');
        }
      },
      error: err => {
        const msg = `个人信息加载失败！！！ ${err}`;
        this.notifyServ.notify(msg, 'error');
      }
    });
  }

  private _elementMapToForm(): void {
    this.form.controls['fullName'].setValue(this.people.fullName);
    this.form.controls['gender'].setValue(this.people.gender);
    this.form.controls['birthday'].setValue(this.people.birthday);
    this.form.controls['education'].setValue(this.people.education);
    this.form.controls['profession'].setValue(this.people.profession);
    this.form.controls['intro'].setValue(this.people.intro);
  }

  private _formMapToElement(people: PeopleElement): void {
    people.fullName = this.form.controls['fullName'].value;
    people.gender = this.form.controls['gender'].value;
    people.birthday = this.form.controls['birthday'].value;
    people.education = this.form.controls['education'].value;
    people.profession = this.form.controls['profession'].value;
    people.intro = this.form.controls['intro'].value;
  }
}
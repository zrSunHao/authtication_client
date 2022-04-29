import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PeopleElement } from '../model';

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
  people: PeopleElement = { id: '1', customerId: '1', fullName: '1', gender: '1', birthday: new Date(), education: '1', profession: '计算机', intro: 'sddsfdfsdfsdffds', };

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

    this._formMapToElement();
  }

  onCancelClick(): void {
    this.form.disable();
    this.dateDisabled = true;
    this.edit = false;
    this._elementMapToForm();
  }

  _elementMapToForm(): void {
    this.form.controls['fullName'].setValue(this.people.fullName);
    this.form.controls['gender'].setValue(this.people.gender);
    this.form.controls['birthday'].setValue(this.people.birthday);
    this.form.controls['education'].setValue(this.people.education);
    this.form.controls['profession'].setValue(this.people.profession);
    this.form.controls['intro'].setValue(this.people.intro);
  }

  _formMapToElement(): void {
    this.people.fullName = this.form.controls['fullName'].value;
    this.people.gender = this.form.controls['gender'].value;
    this.people.birthday = this.form.controls['birthday'].value;
    this.people.education = this.form.controls['education'].value;
    this.people.profession = this.form.controls['profession'].value;
    this.people.intro = this.form.controls['intro'].value;
  }
}

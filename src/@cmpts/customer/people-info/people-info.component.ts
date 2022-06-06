import { Component, Input, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { NotifyService } from 'src/@sun/shared/services/notify.service';
import { CustomerService } from '../customer.service';
import { CTM_EDUCATION_OPS, CTM_GENDER_OPS, PeopleElet } from 'src/@sun/models/customer.model';
import { OptionItem } from 'src/@sun/models/paging.model';

@Component({
  selector: 'app-people-info',
  templateUrl: './people-info.component.html',
  styleUrls: ['./people-info.component.scss']
})

export class PeopleInfoComponent implements OnInit {

  @Input() customerId: string = '';
  form: UntypedFormGroup;
  dateDisabled = false;
  edit = false;
  people: PeopleElet = new PeopleElet();
  gerderOps: OptionItem[] = CTM_GENDER_OPS;
  eduOps: OptionItem[] = CTM_EDUCATION_OPS;

  constructor(private notifyServ: NotifyService,
    private hostServ: CustomerService,) {
    this.form = new UntypedFormGroup({
      fullName: new UntypedFormControl(null, [Validators.required, Validators.pattern(/^[\u4E00-\u9FA5A-Za-z0-9_]{2,16}$/)]),
      gender: new UntypedFormControl(null, [Validators.required]),
      birthday: new UntypedFormControl(null, [Validators.required]),
      education: new UntypedFormControl(null, [Validators.required]),
      profession: new UntypedFormControl(null, [Validators.maxLength(32)]),
      intro: new UntypedFormControl(null, [Validators.maxLength(256)]),
    });
  }

  ngOnInit() {
    this.form.disable();
    this.dateDisabled = true;
    this._loadData();
  }

  onEditClick() {
    if (!this.edit) {
      this.form.enable();
      this.dateDisabled = false;
      this.form.controls['birthday'].disable();
      this.edit = true;
    } else {
      this.form.disable();
      this.dateDisabled = true;
      this.edit = false;
      this._elementMapToForm(this.people);
    }
  }

  onSaveClick() {
    const p: PeopleElet = new PeopleElet();
    p.ctmId = this.customerId;
    this._formMapToElement(p);
    this.hostServ.updatePeople(p).subscribe({
      next: res => {
        if (res.success) {
          const msg = `个人信息保存成功！！！ ${res.allMessages}`;
          this.notifyServ.notify(msg, 'success');
          this._elementMapToForm(p);
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

  private _loadData() {
    this.hostServ.getPeopleById(this.customerId).subscribe({
      next: res => {
        if (res.success) {
          this.people = res.data as PeopleElet;
          this._elementMapToForm(this.people);
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

  private _elementMapToForm(p: PeopleElet): void {
    this.form.controls['fullName'].setValue(p.fullName);
    this.form.controls['gender'].setValue(p.gender);
    this.form.controls['birthday'].setValue(p.birthday);
    this.form.controls['education'].setValue(p.education);
    this.form.controls['profession'].setValue(p.profession);
    this.form.controls['intro'].setValue(p.intro);
  }

  private _formMapToElement(people: PeopleElet): void {
    people.fullName = this.form.controls['fullName'].value;
    people.gender = this.form.controls['gender'].value;
    people.birthday = this.form.controls['birthday'].value;
    people.education = this.form.controls['education'].value;
    people.profession = this.form.controls['profession'].value;
    people.intro = this.form.controls['intro'].value;
  }
}

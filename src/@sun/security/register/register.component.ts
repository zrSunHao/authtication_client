import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      userName: new FormControl(null, [Validators.required, Validators.pattern(/^[a-zA-Z][a-zA-Z0-9_]{5,15}$/)]),
      fullName: new FormControl(null, [Validators.required, Validators.pattern(/^[\u4E00-\u9FA5A-Za-z0-9_]{2,16}$/)]),
      nickName: new FormControl(null, [Validators.required, Validators.pattern(/^[\u4E00-\u9FA5A-Za-z0-9_]{2,16}$/)]),
      gender: new FormControl(null, [Validators.required]),
      birthday: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,17}$/)]),
      confirmPsd: new FormControl(null, [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,17}$/)]),
      education: new FormControl(null, [Validators.required]),
    })
  }

  ngOnInit() {
  }

  register(): void {
    console.log(this.form.value);
  }

}

import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CustomerElement } from '../model';

@Component({
  selector: 'app-dialog-reset',
  templateUrl: './dialog-reset.component.html',
  styleUrls: ['./dialog-reset.component.scss']
})
export class DialogResetComponent implements OnInit {

  form: FormGroup;
  password = new FormControl(null, [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,17}$/)]);

  constructor(private dialogRef: MatDialogRef<DialogResetComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CustomerElement,) {
    this.form = new FormGroup({
      password: new FormControl(null, [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,17}$/)]),
      confirmPsd: new FormControl(null, [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,17}$/)]),
    });
  }

  ngOnInit() {
    console.log(this.data);
  }

  onSaveClick(): void {
    this.dialogRef.close({ op: 'save', newPsd: this.form.controls['password'].value });
  }

  onCloseClick(): void {
    this.dialogRef.close({ op: 'close' });
  }

}

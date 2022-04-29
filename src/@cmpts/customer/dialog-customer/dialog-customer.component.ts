import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CustomerElement } from '../model';

@Component({
  selector: 'app-dialog-customer',
  templateUrl: './dialog-customer.component.html',
  styleUrls: ['./dialog-customer.component.scss']
})
export class DialogCustomerComponent implements OnInit {

  remark: string = '';

  constructor(private dialogRef: MatDialogRef<DialogCustomerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CustomerElement,) {
    this.remark = this.data.remark;
  }

  ngOnInit() {

  }

  onSaveClick(): void {
    this.dialogRef.close({ op: 'save', remark: this.remark });
  }

  onCloseClick(): void {
    this.dialogRef.close({ op: 'close' });
  }

}

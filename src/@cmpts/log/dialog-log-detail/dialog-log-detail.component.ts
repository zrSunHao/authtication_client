import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserLogElet } from 'src/@sun/models/auth.model';
import { OptionItem } from 'src/@sun/models/paging.model';
import { RoleRank, ROLE_RANK_OPS } from 'src/@sun/models/system.model';

@Component({
  selector: 'app-dialog-log-detail',
  templateUrl: './dialog-log-detail.component.html',
  styleUrls: ['./dialog-log-detail.component.scss']
})
export class DialogLogDetailComponent implements OnInit {

  rankOps: OptionItem[] = ROLE_RANK_OPS.filter(x => x.key != RoleRank.other);

  constructor(private dialogRef: MatDialogRef<DialogLogDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: UserLogElet,) { }

  ngOnInit() {
  }

  onCloseClick(): void {
    this.dialogRef.close({ op: 'close' });
  }
}

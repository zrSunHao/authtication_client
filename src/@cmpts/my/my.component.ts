import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/@sun/shared/services/auth.service';

@Component({
  selector: 'app-my',
  templateUrl: './my.component.html',
  styleUrls: ['./my.component.scss']
})
export class MyComponent implements OnInit {
  id: string = '';
  name: string = '';

  constructor(private route: ActivatedRoute,
    private router: Router,
    private authServ: AuthService) { }

  ngOnInit() {
    const account = this.authServ.getCustomer();
    this.id = account.id as string;
    this.name = account.name;
  }

  onPreviousPageClick(): void {
    history.back();
  }

}

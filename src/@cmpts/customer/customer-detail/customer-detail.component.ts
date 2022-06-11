import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/@sun/shared/services/auth.service';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss']
})
export class CustomerDetailComponent implements OnInit {

  id: string = '';
  name: string = '';

  constructor(private route: ActivatedRoute, 
    private router: Router,private authServ: AuthService,) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.name = params['name'];
      this.authServ.log('进入客户详情页面', `客户标识[${this.id}]`);
    })
  }

  onPreviousPageClick(): void {
    this.router.navigate([`/customer`]);
  }

}

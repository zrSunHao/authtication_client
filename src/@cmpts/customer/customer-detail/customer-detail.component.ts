import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss']
})
export class CustomerDetailComponent implements OnInit {

  id: string = '';
  name: string = '';

  constructor(private route: ActivatedRoute, 
    private router: Router,) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.name = params['name'];
    })
  }

  onPreviousPageClick(): void {
    this.router.navigate([`/customer`]);
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-my',
  templateUrl: './my.component.html',
  styleUrls: ['./my.component.scss']
})
export class MyComponent implements OnInit {
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

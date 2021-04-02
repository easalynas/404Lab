import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  category:string;

  constructor(
    private activateRoute:ActivatedRoute
  ) {
  }

  ngOnInit() {
     this.activateRoute.params.subscribe(
       params => {
          //console.log('params....', params.name);
          this.category = params.name;
     });
  }


}

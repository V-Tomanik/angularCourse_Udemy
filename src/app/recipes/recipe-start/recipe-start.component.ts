import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-start',
  template: `
     <h3> Please select a recipe </h3>
     `,
  styleUrls: ['./recipe-start.component.css']
})
export class RecipeStartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

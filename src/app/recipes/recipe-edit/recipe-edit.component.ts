import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  template: `
    <p>
      recipe-edit works!
    </p>
  `,
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
	id!:number	
	editMode =false; 

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
		this.route.params.subscribe((params:Params) =>{
			this.id = +params['id']	;
			this.editMode = params['id'] != null;
		})
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.services';

@Component({
  selector: 'app-recipes-detail',
  templateUrl:'./recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {
	
	recipe!:Recipe;
	id!: number;	

  constructor(private recipeService: RecipeService,
						 private route: ActivatedRoute) {}

  ngOnInit(): void {
		this.route.params.subscribe((params:Params) =>{ 
																this.id = +params['id'];
																this.recipe = this.recipeService.getRecipe(this.id);}
															 )}
	
	addToShopping(){
			this.recipeService.addToShoppingList(this.recipe.ingredient)
		}
}

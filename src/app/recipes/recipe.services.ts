import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService{

	constructor(private ShoppingService: ShoppingService){}


	RecipeSelected = new EventEmitter<Recipe>();	

	private recipes: Recipe[] =[
		new Recipe('Test Name','Descrição Teste','https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
							[new Ingredient('meat',1),new Ingredient('maça',2)]),
		new Recipe('Test2','Descrição Teste2','https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
							[new Ingredient('mamão',1),new Ingredient('banana',2)])]


	getRecipes(){
		// Retorna uma cópia da lista (usando o slice vazio)
		return this.recipes.slice();
	}

	addToShoppingList(ingredient:Ingredient[]){
		this.ShoppingService.addIngredients(ingredient)
	}
}

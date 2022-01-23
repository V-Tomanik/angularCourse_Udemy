import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService{
	RecipeSelected = new EventEmitter<Recipe>();	

	private recipes: Recipe[] =[
		new Recipe('Test Name','Descrição Teste','https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
		new Recipe('Test2','Descrição Teste2','https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')]


	getRecipes(){
		// Retorna uma cópia da lista (usando o slice vazio)
		return this.recipes.slice();
	}

}

import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingService{
	IngredientAdded = new EventEmitter<Ingredient[]>();

	private ingredients: Ingredient[] =[
		new Ingredient('Maça',5),
		new Ingredient('Tomate',8),
	]; 
	
	getIngredients(){
		return this.ingredients.slice();
	}
	addIngredients(ingredient:Ingredient){
		this.ingredients.push(ingredient);
		this.IngredientAdded.emit(this.ingredients);
	}
}

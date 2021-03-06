import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl:'./shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
	providers: []
})
export class ShoppingListComponent implements OnInit {
	ingredients!:Ingredient[];

  constructor(private shoppingService: ShoppingService) { }

  ngOnInit(): void {
		this.ingredients = this.shoppingService.getIngredients();

		this.shoppingService.IngredientAdded.subscribe(
			(recipes:Ingredient[]) =>{this.ingredients = recipes;})
  	}
}

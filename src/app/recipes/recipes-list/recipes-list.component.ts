import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl:'./recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

	@Output() recipeWasSelected = new EventEmitter<Recipe>();

	recipes: Recipe[] =[
		new Recipe('Test Name','Descrição Teste','https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
		new Recipe('Test2','Descrição Teste2','https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')]
  	constructor() { }

  	ngOnInit(): void {
  }
	
	onRecipeSelected(recipSelected:Recipe){
		this.recipeWasSelected.emit(recipSelected)	
	}
}

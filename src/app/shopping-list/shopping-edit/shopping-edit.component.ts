import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl:'./shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
 	@Output() ingredientAdded = new EventEmitter<Ingredient>()

	@ViewChild('nameInput',{static:true}) nameInputRef!: ElementRef;
	@ViewChild('amountInput',{static:true}) amountInputRef!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }
	
	onAddItem(){
		const nameItem = this.nameInputRef.nativeElement.value;
		const amountItem = this.amountInputRef.nativeElement.value;
		const newIngredient = new Ingredient(nameItem,amountItem);
		this.ingredientAdded.emit(newIngredient)
	}
}

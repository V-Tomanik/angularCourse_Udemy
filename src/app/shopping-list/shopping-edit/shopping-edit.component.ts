import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl:'./shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
	@ViewChild('nameInput',{static:true}) nameInputRef!: ElementRef;
	@ViewChild('amountInput',{static:true}) amountInputRef!: ElementRef;

  constructor(private shoppingService:ShoppingService) { }

  ngOnInit(): void {
  }
	
	onAddItem(){
		const nameItem = this.nameInputRef.nativeElement.value;
		const amountItem = this.amountInputRef.nativeElement.value;
		const newIngredient = new Ingredient(nameItem,amountItem);
		this.shoppingService.addIngredients(newIngredient);
	}
}

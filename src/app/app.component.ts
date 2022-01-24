import { Component } from '@angular/core';
import { ShoppingService } from './shopping-list/shopping-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
	providers:[ShoppingService]
})
export class AppComponent {
	headerFeature:string='recipes';	


	onNavigate(FeatureSelected:string){
		this.headerFeature=FeatureSelected	
	}
}

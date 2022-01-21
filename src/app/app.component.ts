import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	headerFeature:string='recipes';	


	onNavigate(FeatureSelected:string){
		this.headerFeature=FeatureSelected	
	}
}

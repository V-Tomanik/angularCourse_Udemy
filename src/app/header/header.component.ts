import { Component, EventEmitter, Output } from "@angular/core";

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html'})
export class HeaderComponent{
  @Output() HeaderEvent = new EventEmitter<string>();
  
	collapsed=true;
	
	//Função que emite para o app.component qual opção do header foi selecionada
	featureSelected(feature:string){
		this.HeaderEvent.emit(feature)
	}
}

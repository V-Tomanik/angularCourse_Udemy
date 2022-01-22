import { Directive, HostBinding, HostListener } from "@angular/core";


@Directive({
	selector: '[appDrowpdown]'
})
export class drowpdownDirective {
	@HostBinding('class.open') isOpen = false;

	@HostListener('click') toggleOpen(){
		this.isOpen = !this.isOpen;
	}
}

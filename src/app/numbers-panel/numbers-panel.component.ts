import { Component} from '@angular/core';
import { Calculadora } from '../calculadora.module';

@Component({
  selector: 'numbers-panel',
  templateUrl: './numbers-panel.component.html',
  styleUrls: ['./numbers-panel.component.css']
})
export class NumbersPanelComponent {
	calc = Calculadora.getInstance();
  constructor() { }

  add_value(button: string):void{
	  this.calc.add_to_string(button);
  }
}

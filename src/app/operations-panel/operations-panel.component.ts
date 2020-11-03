import { Component } from '@angular/core';
import { Calculadora } from '../calculadora.module';

@Component({
  selector: 'operations-panel',
  templateUrl: './operations-panel.component.html',
  styleUrls: ['./operations-panel.component.css']
})
export class OperationsPanelComponent {
	calc = Calculadora.getInstance();

  constructor() { }

  add_simbol(simbol: string): void{
	  this.calc.add_to_string(simbol);
  }
  compute_result(): void{
	  this.calc.compute_result();
  }
  clear():void{
	  this.calc.clear_result();
  }
}

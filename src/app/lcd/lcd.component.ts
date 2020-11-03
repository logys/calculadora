import { Component, OnInit } from '@angular/core';
import { Calculadora } from '../calculadora.module';

@Component({
  selector: 'lcd',
  templateUrl: './lcd.component.html',
  styleUrls: ['./lcd.component.css']
})
export class LcdComponent {
	calc = Calculadora.getInstance();
  constructor() { }

  get_display_string(): string{
	  return this.calc.stack_string();
  }
}

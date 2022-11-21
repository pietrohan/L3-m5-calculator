import {Component, OnInit} from '@angular/core';
// @ts-ignore
import {Calculator} from '../calculator';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  calculator: Calculator = {};

  constructor() {
  }

  ngOnInit() {
  }

  getResult() {
    switch (this.calculator.operator) {
      case "+": {
        // @ts-ignore
        this.calculator.result = this.calculator.number1 + this.calculator.number2;
        break;
      }
      case "-": {
        // @ts-ignore
        this.calculator.result = this.calculator.number1 - this.calculator.number2;
        break;
      }
      case "*": {
        // @ts-ignore
        this.calculator.result = this.calculator.number1 * this.calculator.number2;
        break;
      }
      case "/": {
        // @ts-ignore
        this.calculator.result = this.calculator.number1 / this.calculator.number2;
        break;
      }
    }
  }
}

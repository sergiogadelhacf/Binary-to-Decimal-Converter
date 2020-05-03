import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {

  binaryValue: number;
  decimalValue: number;

  constructor() { }

  ngOnInit(): void {
  }

  convertToDecimal(value){
    let result: number = 0;

    for(let c of value){
      result = (result * 2) + (+c);
    }

    this.decimalValue = result;
  }

}

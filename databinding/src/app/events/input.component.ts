import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styles: [
  ]
})
export class InputComponent implements OnInit {

  value: string = "";
  value1: string = ""
  value2: string = "default";
  value3:string="";

  constructor() { }

  ngOnInit(): void {
  }
  //input listener
  onInput(evt: any) {
    //console.log('reading data')
    //read value from the text box
    // console.log(evt.target.value);
    //update the value variable
    this.value = evt.target.value;
  }

}

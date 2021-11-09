import { Component, OnInit } from '@angular/core';
import { Address } from '../types/address.type';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styles: [
  ]
})
export class InterpolationComponent implements OnInit {

  //instance variables ; models- data
  firstName: string = "Subramanian";
  age: number = 18;
  isValid: boolean = true;
  //objects
  address: Address = {
    city: 'Coimbatore',
    state: 'TN'
  };
  //Array
  skills: Array<string> = ["javascript", "angular", "typescript", "microservices"];


  constructor() { }

  ngOnInit(): void {
  }

}

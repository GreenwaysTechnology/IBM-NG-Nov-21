import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styles: [
  ]
})
export class PipesComponent implements OnInit {

  message: string = "hello, how are you?"
  price: number = 1098.7898;
  date: Date = new Date();

  user = {
    id: 1,
    name: 'Subramanian',
    address: {
      city: 'Coimbatore',
      state: 'TN'
    }
  }


  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greetingparent',
  templateUrl: './greetingparent.component.html',
  styles: [
  ]
})
export class GreetingparentComponent implements OnInit {

  greet: string = "Greetings"
  message: any = {
    id: 1,
    name: 'subramanian',
    msg: 'Hello',
    date: new Date()
  }

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-greetingchild',
  templateUrl: './greetingchild.component.html',
  styles: [
  ]
})
export class GreetingchildComponent implements OnInit {

  @Input()
  message: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}

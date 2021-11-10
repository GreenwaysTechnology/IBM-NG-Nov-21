import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switchcase',
  templateUrl: './switchcase.component.html',
  styles: [
  ]
})
export class SwitchcaseComponent implements OnInit {
  feedback: string = "bad";
  constructor() { }

  ngOnInit(): void {
  }

}

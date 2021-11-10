import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styles: [
  ]
})
export class ParentComponent implements OnInit {
  value: string = ""

  constructor() { }

  ngOnInit(): void {
  }
  onRead(value: string) {
    this.value = value;
  }
}

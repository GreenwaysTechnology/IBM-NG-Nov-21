import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attributes',
  templateUrl: './attributes.component.html',
  styles: [
  ]
})
export class AttributesComponent implements OnInit {

  imageLocation: string = "favicon.ico";
  isEnabled: boolean = true;
  isHidden: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

}

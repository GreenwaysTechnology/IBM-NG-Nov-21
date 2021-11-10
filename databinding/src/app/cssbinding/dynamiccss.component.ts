import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamiccss',
  templateUrl: './dynamiccss.component.html',
  styles: [
  ]
})
export class DynamiccssComponent implements OnInit {

  isSpecial: boolean = true
  activeLinkStyle = 'overline';
  
  constructor() { }

  ngOnInit(): void {
  }


  changeStyle() {
    this.isSpecial = !this.isSpecial
  }

}

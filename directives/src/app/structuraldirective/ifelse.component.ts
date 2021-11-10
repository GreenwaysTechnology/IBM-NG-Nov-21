import { Component, OnInit } from '@angular/core';
import { TODOS } from '../mockdata/todos';

@Component({
  selector: 'app-ifelse',
  templateUrl: './ifelse.component.html',
  styles: [
  ]
})
export class IfelseComponent implements OnInit {

  //if 
  isValid: boolean = true;
  //if..else
  isEnabled: boolean = true;
  todos = TODOS
  isHidden: boolean = true;
  hide:boolean = true;

  //progress bar;
  loading: boolean = true;
  constructor() {
    setTimeout(() => {
      this.loading = !this.loading;
    }, 5000)
  }

  ngOnInit(): void {
  }
  toggle() {
    this.isHidden = !this.isHidden
  }
  toggle1() {
    this.hide = !this.hide
  }

}

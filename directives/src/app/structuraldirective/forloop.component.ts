import { Component, OnInit } from '@angular/core';
import { TODOS } from '../mockdata/todos';

@Component({
  selector: 'app-forloop',
  templateUrl: './forloop.component.html',
  styles: [
  ]
})
export class ForloopComponent implements OnInit {
  //numberlist
  numList: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  todos = TODOS

  constructor() { }

  ngOnInit(): void {
  }

}

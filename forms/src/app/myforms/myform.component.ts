import { Component, OnInit } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styles: [
  ]
})
export class MyformComponent implements OnInit {

  //model object
  category: Array<string> = ["admin", "guest", "premium", "visitor"];
  user = new User(Math.random(), "Subramanian", "Murugan", this.category[3]);
  submitted:boolean= false;
  constructor() { }


  ngOnInit(): void {
  }
  onSubmit() {
    console.log(this.user);
    this.submitted =  true;
  }

}

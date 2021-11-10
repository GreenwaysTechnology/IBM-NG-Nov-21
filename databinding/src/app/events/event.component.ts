import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styles: [
  ]
})
export class EventComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  //listener method
  onSubmit() {
    alert('submit')
  }
  //getting data
  onRead(message:string){
    alert(message);
  }

}

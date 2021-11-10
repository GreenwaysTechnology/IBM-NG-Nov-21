import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styles: [
  ]
})
export class ChildComponent implements OnInit {
  value: string = "";
  constructor() { }

  //declare custom event via EventEmiter
  //onRequest is name of the event=>customEvent
  @Output()
  onRequest = new EventEmitter<string>();


  ngOnInit(): void {
  }
  onSubmit() {
   // alert(this.value)
   this.onRequest.emit(this.value);
  }

}

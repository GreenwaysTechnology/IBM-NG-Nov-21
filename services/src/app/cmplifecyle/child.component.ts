import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styles: [
  ]
})
export class ChildComponent implements OnInit {
  @Input()
  counter: number = 0;

  constructor() {
    console.log('Child Component constructor is called')
  }

  //called only if component receives props from the parent component
  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      const chng = changes[propName];
      const cur = JSON.stringify(chng.currentValue);
      const prev = JSON.stringify(chng.previousValue);
      console.log(chng)
    }
    console.log('ChildComponent- ngOnchanges')
  }

  //only one time
  ngOnInit(): void {
    console.log('ChildComponent -ngOnInit is called')
  }

}

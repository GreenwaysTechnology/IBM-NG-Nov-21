import { Component, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-cmplifecycle',
  templateUrl: './cmplifecycle.component.html',
  styles: [
  ]
})
export class CmplifecycleComponent implements OnInit {
  counter: number = 1;

  constructor() {
    console.log('CmplifecycleComponent- constructor is called')
  }
  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      const chng = changes[propName];
      const cur = JSON.stringify(chng.currentValue);
      const prev = JSON.stringify(chng.previousValue);

    }
    console.log('CmplifecycleComponent- ngOnchanges')
  }
  ngOnInit(): void {
    console.log('CmplifecycleComponent -ngOnInit is called')
  }
  increment() {
    this.counter++;
  }
  //resource deallocation code
  ngOnDestroy() {
    console.log('CmplifecycleComponent -ngOnDestroy is called')
  }

}

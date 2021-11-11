import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ObservableService } from './observable.service';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styles: [
  ]
})
export class ObservableComponent implements OnInit {

  stream$: Array<number> = [];

  //! => definit assignment assertion property
  subscription!: Subscription;

  constructor(private obsService: ObservableService) { }
  //listener who listens for data

  ngOnInit(): void {
    // this.obsService.createSimpleStream().subscribe(data => {
    //   console.log(data);
    //   this.stream$.push(data);
    // }, error => {
    //   console.log('error')
    // }, () => {
    //   console.log('completed')
    // });
    //subscribe({next: {},complete:{},error:{}})
    this.subscription = this.obsService.createSimpleStream().subscribe({
      next: (data: number) => {
        console.log(data)
        this.stream$.push(data);
      },
      complete: () => { },
      error: () => { }
    });

  }
  //called once the when the component is destroyed
  ngOnDestory() {
    //remove Observable from the memory
    this.subscription.unsubscribe();
  }

}

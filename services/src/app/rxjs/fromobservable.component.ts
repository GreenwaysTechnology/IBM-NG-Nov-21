import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ObservableService } from './observable.service';

@Component({
  selector: 'app-fromobservable',
  templateUrl: './fromobservable.component.html',
  styles: [
  ]
})
export class FromobservableComponent implements OnInit {
  stream$: Array<number> = [];
  subscription!: Subscription;
  //For Async Pipe
  streamAsync!: Observable<number[]>;

  constructor(private obsService: ObservableService) { }

  ngOnInit(): void {
    //with subscribe method
    this.subscription = this.obsService.createFrom().subscribe({
      next: (data: number) => {
        console.log(data)
        this.stream$.push(data);
      },
      complete: () => { },
      error: () => { }
    });

    //
    this.streamAsync = this.obsService.createArray()

  }
  ngOnDestory() {
    //remove Observable from the memory
    this.subscription.unsubscribe();
  }
}

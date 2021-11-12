import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DataProcessingService } from './dataprocessing.service';

@Component({
  selector: 'app-dataprocessing',
  templateUrl: './dataprocessing.component.html',
  styles: [
  ]
})
export class DataprocessingComponent implements OnInit {
  stream$: Array<number> = [];

  streamFilter$:Array <number> =[]
  subscription!: Subscription;
  //For Async Pipe
  streamAsync!: Observable<number[]>;

  constructor(private obsService: DataProcessingService) { }

  ngOnInit(): void {
    this.subscription = this.obsService.transformUsingMap().subscribe({
      next: (data: number) => {
        console.log(data)
        this.stream$.push(data);
      },
      complete: () => { },
      error: () => { }
    });

    //filtering data
    this.obsService.filterByValue().subscribe({
      next: (data: number) => {
        console.log(data)
        this.streamFilter$.push(data);
      },
      complete: () => { },
      error: () => { }
    });

  }

  ngOnDestory() {
    //remove Observable from the memory
    this.subscription.unsubscribe();
  }

}

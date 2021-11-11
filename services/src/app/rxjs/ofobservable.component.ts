import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ObservableService } from './observable.service';

@Component({
  selector: 'app-ofobservable',
  templateUrl: './ofobservable.component.html',
  styles: [
  ]
})
export class OfobservableComponent implements OnInit {
  stream$: Array<number> = [];
  subscription!: Subscription;

  constructor(private obsService: ObservableService) { }

  ngOnInit(): void {
    this.subscription = this.obsService.createOf().subscribe({
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

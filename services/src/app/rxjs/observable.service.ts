import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObservableService {

  constructor() { }

  //method which returns an observable
  public createSimpleStream(): Observable<number> {
    return new Observable(observer => {
      //push value / error / complete
      observer.next(10) // push value into stream
      observer.next(20)
      observer.next(30)
      observer.next(40)
      observer.next(50)
      observer.complete();
    });
  }
  //creational operators : of
  public createOf(): Observable<number> {
    return of(10, 20, 30, 40, 50) // ob
  }
  //creational operator : from
  public createFrom(): Observable<number> {
    return from([10, 20, 30, 40, 50])
  }
  //Return an array 
  public createArray(): Observable<number[]> {
    return of([10, 20, 30, 40, 50])
  }


}

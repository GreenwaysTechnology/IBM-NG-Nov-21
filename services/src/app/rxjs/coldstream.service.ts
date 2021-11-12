import { Injectable } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ColdstreamService {

  constructor() { }

  //cold stream api
  public emitValue(): Observable<number> {
    return interval(1000).pipe(tap(() => console.log('emitting')));
  }
}
import { Injectable } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { tap, map, share } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HotstreamService {

  hotStream!: Observable<number>;
  
  constructor() {
    //emit value in 1s
    const source = interval(1000);
    //log side effect, emit result
    const stream = source.pipe(
      tap(() => console.log('***starts***')),
      map(i => i * 2),
      share()
    );
    //make it hot.
    //share observable among subscribers
    this.hotStream = stream.pipe(share());
  }
  public emitValue(): Observable<number> {
      return this.hotStream;
  }


}
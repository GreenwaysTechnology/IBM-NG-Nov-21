import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PromisepatternService {

  constructor() { }

  //async code with promises
  getValue(): Promise<number> {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, 5000, 1000)
    });
  }

}

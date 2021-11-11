import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CallbackpatternService {
  constructor() { }

  //biz method sync method
  public getValue(): number {
    return 10;
  }
  //biz method : async method : timer
  public delayValue(callback: any): void {
    //timer : Return "Hello" message to the caller after 5ms .
    setTimeout(callback, 5000, 100);
  }


}

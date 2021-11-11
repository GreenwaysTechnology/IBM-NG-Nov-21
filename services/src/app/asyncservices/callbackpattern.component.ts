import { Component, OnInit } from '@angular/core';
import { CallbackpatternService } from './callbackpattern.service';

@Component({
  selector: 'app-callbackpattern',
  templateUrl: './callbackpattern.component.html',
  styles: [
  ]
})
export class CallbackpatternComponent implements OnInit {

  syncValue: number = 0;
  asyncValueCb: number = 0;
  loading: boolean = true;
  status: string = "loding..."

  constructor(private cbService: CallbackpatternService) { }

  ngOnInit(): void {
    //sync call 
    this.syncValue = this.cbService.getValue();
    //async call
    this.cbService.delayValue((value: number) => {
      this.asyncValueCb = value;
      this.loading = false;
    });

  }

}

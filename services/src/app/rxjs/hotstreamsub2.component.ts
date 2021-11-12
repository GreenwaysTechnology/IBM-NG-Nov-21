import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HotstreamService } from './hotstream.service';

@Component({
  selector: 'app-hotstreamsub2',
  templateUrl: './hotstreamsub2.component.html',
  styles: [
  ]
})
export class Hotstreamsub2Component implements OnInit {
  subscription!: Subscription;
  values: number[] = [];

  constructor(private hotStream: HotstreamService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.subscription = this.hotStream.emitValue().subscribe(data => {
        console.log(data)
        this.values.push(data);
      })
    }, 10000);

  }
  ngOnDestory() {
    console.log('component has been destroyed')
    this.subscription.unsubscribe()
  }

}

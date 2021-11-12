import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HotstreamService } from './hotstream.service';

@Component({
  selector: 'app-hotstreamsub1',
  templateUrl: './hotstreamsub1.component.html',
  styles: [
  ]
})
export class Hotstreamsub1Component implements OnInit {
  subscription!: Subscription;
  values: number[] = [];

  constructor(private hotStream:HotstreamService) { }

  ngOnInit(): void {
    this.subscription = this.hotStream.emitValue().subscribe(data => {
      this.values.push(data);
    })

  }
  ngOnDestory() {
    console.log('component has been destroyed')
    this.subscription.unsubscribe()
  }

}

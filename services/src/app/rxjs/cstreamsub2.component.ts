import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ColdstreamService } from './coldstream.service';

@Component({
  selector: 'app-cstreamsub2',
  templateUrl: './cstreamsub2.component.html',
  styles: [
  ]
})
export class Cstreamsub2Component implements OnInit {
  values: number[] = [];
  subscription!: Subscription;

  constructor(public coldService: ColdstreamService) { }
  ngOnInit(): void {
    setTimeout(() => {
      this.subscription = this.coldService.emitValue().subscribe(data => {
        this.values.push(data);
      })
    },10000)

  }
  ngOnDestory() {
    console.log('component has been destroyed')
    this.subscription.unsubscribe()
  }


}

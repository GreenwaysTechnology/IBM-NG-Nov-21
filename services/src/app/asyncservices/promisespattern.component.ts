import { Component, OnInit } from '@angular/core';
import { PromisepatternService } from './promisepattern.service';

@Component({
  selector: 'app-promisespattern',
  templateUrl: './promisespattern.component.html',
  styles: [
  ]
})
export class PromisespatternComponent implements OnInit {

  value: number = 0;
  constructor(private promiseService: PromisepatternService) { }

  ngOnInit(): void {
    this.promiseService.getValue()
      .then(value => {
        this.value = value;
      }).catch(err => console.log(err))
  }

}

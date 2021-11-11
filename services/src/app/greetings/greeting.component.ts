import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../util/logger.service';
import { GreetingService } from './greeing.service';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styles: [
  ]
})
export class GreetingComponent implements OnInit {

  // message:string = "Hello";
  message: string = "";
  hai: string = ""
  greet: string = ""
  logMessages: string[] = [];
  //constructor injection
  constructor(private greetingService: GreetingService, private logger: LoggerService) {
    // // console.log(this.helloService.sayHello());
    // this.message = this.greetingService.sayHello();
    // this.hai = this.greetingService.sayHai();
    // this.greet = this.greetingService.sayGreet();
  }

  ngOnInit(): void {
    this.message = this.greetingService.sayHello();
    this.logMessages=this.logger.fetch()
    this.hai = this.greetingService.sayHai();
    this.logMessages=this.logger.fetch()
    this.greet = this.greetingService.sayGreet();
    this.logMessages=this.logger.fetch()

  }

}

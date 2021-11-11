import { Injectable } from "@angular/core";
import { LoggerService } from "../util/logger.service";


@Injectable({
    providedIn: 'root' // we tell the angular that use "root injector to create object"
})
export class GreetingService {
    //GreetingService has LoggerService dependency
    constructor(private logger: LoggerService) { }
    //methods
    public sayHello(): string {
        this.logger.add('SayHello method  is called')
        return "Hello Service!!";
    }
    public sayHai(): string {
        this.logger.add('sayHai method  is called')
        return "Hai"
    }
    public sayGreet(): string {
        this.logger.add('sayGreet method  is called')
        return "Greet";
    }

}
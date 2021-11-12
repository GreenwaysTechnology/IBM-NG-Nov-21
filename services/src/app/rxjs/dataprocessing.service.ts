import { Injectable } from "@angular/core";
import { Observable, of, range, filter } from "rxjs";
import { map,takeLast } from 'rxjs/operators'

@Injectable({
    providedIn: 'root'
})
export class DataProcessingService {
    constructor() { }

    public transformUsingMap(): Observable<number> {
        //data processing operators
        return range(1, 20).pipe(map(x => x * 2), map(x => x * 4));
    }

    public filterByValue(): Observable<number> {
        return range(1, 25).pipe(filter(x => x % 2 === 1),takeLast(5))
    }

}
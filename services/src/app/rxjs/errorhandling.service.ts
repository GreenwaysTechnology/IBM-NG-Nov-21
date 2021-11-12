import { Injectable } from "@angular/core";
import { catchError, map, of, retry } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class ErrorHandlingService {

    public handleError() {
        return of(1, 2, 3, 4, 5).pipe(map(x => {
            if (x === 4) {
                throw new Error('oops')
            }
            return x
        }),
            retry(3),
            catchError(err => {
                return of(this.fallback())
            })
        );
    }

    private fallback(): number {
        return 3330;
    }
}
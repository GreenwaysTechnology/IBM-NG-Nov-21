import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, of, retry, tap } from "rxjs";
import { User } from "../types/user.type";



@Injectable({
    providedIn: 'root'
})
export class UserService {
    constructor(private http: HttpClient) { }

    public findAll(): Observable<User[]> {
        const url = 'http://localhost:3000/users';
        return this.http.get<User[]>(url).pipe(
            retry(5),
            catchError(this.handleError<User[]>('findAll-users', this.fallback()))
        );
    }
    findById(id: number): Observable<User> {
        const url = `http://localhost:3000/users/${id}`;
        return this.http.get<User>(url).pipe(
            tap(() => console.log(`fetched user id = ${id}`)),
            catchError(this.handleError<User>(`findByid id=${id}`))
        )
    }


    //generic error handler
    private handleError<T>(operation = "operation", result?: T) {
        return (error: any): Observable<T> => {
            //console.error(error);
            return of(result as T);
        }
    }
    private fallback() {
        return [{ id: 0, name: 'fallbackName', username: 'fallbackusername', email: 'fallbackemail' }];
    }

}
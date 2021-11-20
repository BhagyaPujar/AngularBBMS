import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { User } from './User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private restUrl: string = 'http://localhost:8080/springbbms/user';
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getUserFromService(): Observable<User[]> {
    return this.http
    .get<User[]>(this.restUrl + '/allusr')
      .pipe(retry(1), catchError(this.handleError));
  }


  createUser(user: any): Observable<User> {
   
    return this.http.post<User>(
        this.restUrl + '/createUser',
        JSON.stringify(user),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
      
  }

  deleteUser(usr_id: number) {
    return this.http
      .delete<User>(
        this.restUrl + '/deleteUser/' + usr_id,
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  getUser(usr_id: any): Observable<User> {
    return this.http
      .get<User>(this.restUrl + '/getUser/' + usr_id, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }

  updateUser(user: any): Observable<User> {
    console.log('from service update() ' + user);
    return this.http
      .put<User>(
        this.restUrl + '/updateUser',
        JSON.stringify(user),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
      }
 
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Codeeee : ${error.status} \n Error Messageeee : ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
 
}
console.log('From service.ts');

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Donor } from './Donor';


@Injectable({
  providedIn: 'root',
})
export class DonorService {
  createDonor(DonorDetails: any) {
    throw new Error('Method not implemented.');
  }
  private restUrl: string = 'http://localhost:8080/springbbms/donor';
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getUserFromService(): Observable<Donor[]> {
    return this.http
    .get<Donor[]>(this.restUrl + '/alldnr')
      .pipe(retry(1), catchError(this.handleError));
  }


  addDonor(donor: any): Observable<Donor> {
   
    return this.http.post<Donor>(
        this.restUrl + '/addDonor',
        JSON.stringify(donor),
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

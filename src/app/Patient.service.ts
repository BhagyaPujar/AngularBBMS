import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Patient } from './Patient';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  getPatientById(patientDetails: { pat_name: string; pat_email: string; pat_password: string; pat_address: string; pat_mobile: string; pat_gender: string; }) {
    throw new Error('Method not implemented.');
  }
  
  private restUrl: string = 'http://localhost:8080/springbbms/patient';
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getPatient(pat_id: any): Observable<Patient> {
                    return this.http
                      .get<Patient>(this.restUrl + '/getPatient/' + pat_id, this.httpOptions)
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
                
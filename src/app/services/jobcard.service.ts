
//api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Jobcard } from '../models/jobcard';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
 
@Injectable({
  providedIn: 'root'
})
export class JobcardService {

  // API path
  // tslint:disable-next-line:variable-name
  base_path = 'http://13.59.82.69:8000/api/jobcard';

  constructor(private http: HttpClient) { }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }


  // Create a new item
  createItem(item): Observable<Jobcard> {
    return this.http
      .post<Jobcard>(this.base_path, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  // Get single student data by ID
  getItem(_id): Observable<Jobcard> {
    return this.http
      .get<Jobcard>(this.base_path + '/' + _id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }
 
  // Get students data
  getList(): Observable<Jobcard> {
    return this.http
      .get<Jobcard>(this.base_path)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
 
  // Update item by id
  updateItem(_id, item): Observable<Jobcard> {
    return this.http
      .put<Jobcard>(this.base_path + '/' + _id, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
 
  // Delete item by id
  deleteItem(_id) {
    return this.http
      .delete<Jobcard>(this.base_path + '/' + _id, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
 
}
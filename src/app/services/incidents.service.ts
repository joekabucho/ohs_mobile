
// api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Incident } from '../models/incident';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IncidentService {
 
  // API path
  base_path = 'http://13.59.82.69:8000/api/incident';
 
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
  };


  // Create a new item
  createItem(item): Observable<Incident> {
    return this.http
      .post<Incident>(this.base_path, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // Get single student data by ID
  getItem(_id): Observable<Incident> {
    return this.http
      .get<Incident>(this.base_path + '/' + _id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
 
  // Get students data
  getList(): Observable<Incident> {
    return this.http
      .get<Incident>(this.base_path)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
 
  // Update item by id
  updateItem(_id, item): Observable<Incident> {
    return this.http
      .put<Incident>(this.base_path + '/' + _id, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
 
  // Delete item by id
  deleteItem(_id) {
    return this.http
      .delete<Incident>(this.base_path + '/' + _id, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
 
}


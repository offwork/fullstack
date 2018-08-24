import { Injectable, Inject } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { BaseApiService } from './base-api.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService extends BaseApiService {

  private baseUrl = environment.apiUrl;
  private httpHeaders: HttpHeaders;

  constructor(@Inject(HttpClient) private httpClient: HttpClient) { 
    super(httpClient);
    this.httpHeaders = new HttpHeaders();
    this.httpHeaders.append('Content-Type', 'application/json')
  }

  straightRequest<R>(method: string, url: string, body?: any | null, options?: {}): Observable<R> {
    return this.httpClient.request<R>(method, `${this.baseUrl}/${url}`, {
      body: body,
      headers: new HttpHeaders({'Content-Type': 'application/json'}),
      observe: 'body',
      params: null,
      responseType: 'json',
      reportProgress: null,
      withCredentials: null,
    }).pipe( catchError(this.handleError) );
  }

  responseRequest<R>(method: string, url: string, body?: any | null, options?: {}): Observable<HttpResponse<R>> {
    return this.httpClient.request<R>(method, `${this.baseUrl}/${url}`, {
      body: body,
      headers: new HttpHeaders({'Content-Type': 'application/json'}),
      observe: 'response',
      params: null,
      responseType: 'json',
      reportProgress: null,
      withCredentials: null,
    }).pipe( catchError(this.handleError) );
  }

  fetchAll<T>(url: string): Observable<T> {
    return this.straightRequest<T>('GET', url);
  }

  createByOne<T>(url: string, body: any | null): Observable<HttpResponse<T>> {
    console.log('Create Contact: ', body);
    return this.responseRequest<T>('POST', url, body);
  }

  updateByOne<T>(url: string, body: any | null): Observable<HttpResponse<T>> {
    console.log('Create Contact: ', body);
    return this.responseRequest<T>('PUT', url, body);
  }

  delete<T>(url: string): Observable<T> {
    return this.straightRequest<T>('DELETE', url);
  }


  // TODO: change Error handling
  private handleError(error: HttpErrorResponse) {
    if(error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
      `Backend returned code ${error.status}, ` +
      `body was: ${error.error}`);
    }

    return throwError(`Something bad happened; please try again later. ${error.message}`);
  }
}

import { Observable } from 'rxjs';
import { HttpResponse, HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Inject } from '@angular/core';

export abstract class BaseApiService {

  constructor(@Inject(HttpClient) httpClient: HttpClient) {}

  /**
   * Construct a request which interprets the body as JSON and returns it.
   *
   * @return an `Observable` of the `HttpResponse` for the request, with a body type of `R`.
   */
  abstract straightRequest<R>(method: string, url: string, body?: any | null, options?: {
    body?: any;
    headers?: HttpHeaders | {
        [header: string]: string | string[];
    };
    observe?: 'body';
    params?: HttpParams | {
        [param: string]: string | string[];
    };
    responseType?: 'json';
    reportProgress?: boolean;
    withCredentials?: boolean;
  }): Observable<R>;

  /**
   * Construct a request which interprets the body as JSON and returns the full response.
   *
   * @return an `Observable` of the `HttpResponse` for the request, with a body type of `R`.
   */
  abstract responseRequest<R>(method: string, url: string, body?: any | null, options?: {
      body?: any;
      headers?: HttpHeaders | {
          [header: string]: string | string[];
      };
      reportProgress?: boolean;
      observe: 'response';
      params?: HttpParams | {
          [param: string]: string | string[];
      };
      responseType?: 'json';
      withCredentials?: boolean;
  }): Observable<HttpResponse<R>>;
}

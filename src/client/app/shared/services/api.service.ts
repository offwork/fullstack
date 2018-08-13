import { Injectable, Inject } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpRequest,
  HttpResponse,
  HttpEvent,
  HttpHandler,
  HttpParams
} from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

export declare type RequestOptionsObserve = 'body' | 'events' | 'response';
export declare type RequestOptionsOType = 'arraybuffer' | 'blob' | 'json' | 'text';

export interface IApiRequestOptions {
  body?: any;
  headers?: HttpHeaders | {
    [header: string]: string | string[];
  };
  params?: HttpParams | {
    [param: string]: string | string[];
  };
  observe?: RequestOptionsObserve;
  reportProgress?: boolean;
  responseType?: RequestOptionsOType;
  withCredentials?: boolean;
}



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = environment.apiUrl;

  constructor(@Inject(HttpClient) private httpClient: HttpClient) { }

  request(method: string, url: string, body?: any, options?: {}): Observable<any> {

    let _body = null;
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    let params = null;
    let observe: RequestOptionsObserve;
    let reportProgress: boolean;
    let responseType: RequestOptionsOType;
    let withCredentials: boolean;

    if( options ) {
      _body = body;
      headers = options['headers'] ? options['headers'] : headers;
      params = options['params'] ? options['params'] : null;
      // observe = options['observe'] ? options['observe'] : undefined;
      reportProgress = options['reportProgress'] ? options['reportProgress'] : false;
      //responseType = options['responseType'] ? options['responseType'] : undefined;
      withCredentials = options['withCredentials'] ? options['withCredentials'] : false;
    }

    // 1 - Varsayilan bir reqtOpts nesnesi request yontemince ayarlanir.
    // 2 - request yonetimini cagiran islev request yontemine bir init nesnesi 
    //     gecerse, reqtOpts nesnesi gecersiz kilinir.
    // 3 - request yonetimini cagiran islev tarafindan request yonetimini donus turu belirlenir.
    const reqtOpts:IApiRequestOptions = {
      body: body ? body : null,
      headers: headers,
      params: params,
      observe: 'body', 
      reportProgress: false,
      responseType: 'json',
      withCredentials: false
    }

    console.log('request options: ', reqtOpts);

    return this.httpClient.request(method, `${this.baseUrl}/${url}`, reqtOpts);
  }

  get(url: string): Observable<Object> {
    return this.request('GET', url);
  }

  post(url: string, body: any | null) {
    return this.request('POST', url, body);
  }
}

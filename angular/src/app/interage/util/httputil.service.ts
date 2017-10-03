import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptionsArgs, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpUtilService {
    
    private http: Http;
    private headers: Headers;
    private options: RequestOptionsArgs;
    private baseUrl: string = 'http://10.1.3.49:8080/quickstart-backend/api';
    
    constructor(http: Http){
        this.http = http;
        
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
     
        this.options = new RequestOptions();
        this.options.headers = this.headers;
        this.options.withCredentials = true;
    }
    
    post(resource: string, payload) : Observable<Response>;
    post(resource: string, payload, headers: Map<string, string>) : Observable<Response>;

    post(resource: string, payload, headers?: Map<string, string>) : Observable<Response> {
        if(headers && headers.size > 0){
            headers.forEach((value: string, key: string) => {
                this.options.headers.append(key, value);
            });
        }
        
        return this.http.post(this.baseUrl + resource, payload, this.options);
    }

    get(resource: string): Observable<Response> {
        return this.http.get(this.baseUrl + resource, this.options);
    }
    
}
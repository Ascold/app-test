import {Injectable} from '@angular/core';
import {Http, Jsonp, RequestOptions, Response, URLSearchParams, Headers,} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

const API_URL_USER_DATA = 'https://api.instagram.com/v1/users/self/';
const API_URL_MEDIA = 'https://api.instagram.com/v1/users/self/media/recent/';
@Injectable()
export class ApiService {
    public token: string;

    constructor(private http: Http, private jsonp: Jsonp) {
        // console.log(this.getData());
    }

    public setToken(token: string) {
        this.token = token;
    }

    public getToken(): string {
        return this.token;
    }

    public getUserData() {
        let params: URLSearchParams = new URLSearchParams();
        params.set('access_token', this.token);
        params.set('callback', 'JSONP_CALLBACK');
        return this.jsonp.get(API_URL_USER_DATA, {search: params})
            .map(response => {
                return response.json();
            })
            .catch(this.handleError);
    }

    public getData() {
        let params: URLSearchParams = new URLSearchParams();
        params.set('access_token', this.token);
        params.set('callback', 'JSONP_CALLBACK');

        return this.jsonp.get(API_URL_MEDIA, {search: params})
            .map(response => {
                return response.json();
            })
            .catch(this.handleError);
    }

    private handleError(error: Response | any) {
        return Observable.throw(error);
    }
}

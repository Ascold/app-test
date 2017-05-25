import {Injectable} from '@angular/core';
import {Http, Jsonp, Response, URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {AppStore} from '../app.store';
import {Store} from '@ngrx/store';
import {User} from '../models/user';

const API_URL_USER_DATA = 'https://api.instagram.com/v1/users/self/';
const API_URL_MEDIA = 'https://api.instagram.com/v1/users/self/media/recent/';

@Injectable()
export class ApiService {
    public token: string;

    constructor(private http: Http, private jsonp: Jsonp, private store: Store<AppStore>) {
        this.store.select('user').subscribe((user: User) => {
                if (user) {
                    this.token = user.token;
                }
            }
        );
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
        // return this.http.get('/assets/user.json').map(response => {
        //     return response.json();
        // }).catch(this.handleError);
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
        // return this.http.get('/assets/data.json').map(response => {
        //     return response.json();
        // }).catch(this.handleError);
    }

    private handleError(error: Response | any) {
        return Observable.throw(error);
    }
}

import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Store} from '@ngrx/store';

import {ApiService} from '../../services/api.service';
import {AppStore} from '../../app.store';
import {User} from '../../models/user';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    constructor(private store: Store<AppStore>,
                private apiService: ApiService,
                private route: ActivatedRoute,
                private router: Router) {
    }

    ngOnInit() {
        let token = this.route.snapshot.fragment.split('=')[1];
        if (token) {
            this.apiService.setToken(token);

            this.apiService.getUserData().subscribe(
                response => {
                    console.log(response);
                    let user = new User(response.data, token);
                    localStorage.user = JSON.stringify(user);

                    this.store.dispatch({
                        type: 'ADD_USER',
                        payload: user
                    });
                },
                error => {
                    alert(error);
                }
            );
        }
        this.router.navigate(['/']);
    }
}

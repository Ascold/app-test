import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ApiService} from '../../services/api.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    constructor(private route: ActivatedRoute, private apiService: ApiService, private router: Router) {
    }

    ngOnInit() {
        let token = this.route.snapshot.fragment.split('=')[1];
        if (token) {
            this.apiService.setToken(token);
        }
        this.router.navigate(['/']);
    }
}

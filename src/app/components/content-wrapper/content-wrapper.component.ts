import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../services/api.service';

@Component({
    selector: 'app-content-wrapper',
    templateUrl: './content-wrapper.component.html',
    styleUrls: ['./content-wrapper.component.css']
})
export class ContentWrapperComponent implements OnInit {
    private token_status: string;
    constructor(private apiService: ApiService) {
        this.token_status = apiService.getToken();
        console.log(this.token_status);
    }
    ngOnInit() {
    }

}

import {Component, OnInit} from '@angular/core';
import {AppStore} from "../../app.store";
import {Store} from "@ngrx/store";
import {User} from "../../models/user";

@Component({
    selector: 'app-content-wrapper',
    templateUrl: './content-wrapper.component.html',
    styleUrls: ['./content-wrapper.component.css']
})
export class ContentWrapperComponent implements OnInit {
    private currentUser: User;
    constructor(private store: Store<AppStore>) {
    }

    ngOnInit() {
        this.store.select('user').subscribe((user: User) => {
                this.currentUser = user;
            }
        );
    }
}

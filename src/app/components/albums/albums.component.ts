import {Component, OnInit} from '@angular/core';
import {Album} from '../../models/album.list';
import {ApiService} from '../../services/api.service';
import {AppStore} from "../../app.store";
import {Store} from "@ngrx/store";
import {User} from "../../models/user";
import {Photo} from "../../models/photo.list";

@Component({
    selector: 'app-albums',
    templateUrl: './albums.component.html',
    styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
    albums: Album[] = [];
    currentUser: User;

    constructor(private apiService: ApiService, private store: Store<AppStore>) {
    }

    ngOnInit() {
        this.store.select('user').subscribe(
            (user: User) => {
                this.currentUser = user;
            }
        );

        this.apiService.getData().subscribe(
            response => {
                response.data.forEach(
                    (albumData) => this.albums.push(new Album(albumData))
                );
                // response.data.carousel_media.forEach(photoData => this.albums.Album.push(new Photo(photoData)));
               this.store.dispatch({type: 'ADD_ALBUM', payload: this.albums});

                console.log(this.albums);
                console.log('------------------------');
            },
            error => {
                alert(error);
            }
        );
    }

}

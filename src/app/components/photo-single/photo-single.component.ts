import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Store} from '@ngrx/store';

import {AppStore} from '../../app.store';
import {Album} from '../../models/album.list';
import {User} from "../../models/user";

@Component({
    selector: 'app-photo-single',
    templateUrl: './photo-single.component.html',
    styleUrls: ['./photo-single.component.css']
})

export class PhotoSingleComponent implements OnInit {

    private currentPhoto;
    private currentAlbum;
    private album;
    public currentUser: User;
    public photoSingleName;

    public backToAlbum() {
        this.router.navigate(['../']);
    };

    constructor(private route: ActivatedRoute,
                private store: Store<AppStore>,
                private router: Router) {
    }

    ngOnInit() {
        let currentAlbumName = this.route.snapshot.params['name'];
        let currentPhotoName = this.route.snapshot.params['id'];
        this.photoSingleName = this.route.snapshot.params['id'];
        this.store.select('albums').subscribe(
            (album: Album) => {
                this.album = album;
                this.currentAlbum = this.album.find(Album => {
                    return Album.albumTitle == currentAlbumName
                });
            }
        );
        this.currentPhoto = this.currentAlbum.albumPhotos.find(temp => {
            return temp.standard_resolution.match(RegExp(currentPhotoName))
        });
        this.store.select('user').subscribe(
            (user: User) => {
                this.currentUser = user;
            }
        );
        console.log(this.currentUser);

    }

}

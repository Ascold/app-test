import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {Album} from '../../models/album.list';
import {AppStore} from '../../app.store';

@Component({
    selector: 'app-photo-list-item',
    templateUrl: './photo-list-item.component.html',
    styleUrls: ['./photo-list-item.component.css']
})
export class PhotoListItemComponent implements OnInit {
    private currentAlbum;
    private album;
    public backToAlbums() {
        this.router.navigate(['/']);
    }

    constructor(private route: ActivatedRoute,
                private store: Store<AppStore>,
                private router: Router) {
    }

    ngOnInit() {
        let currentPage = this.route.snapshot.params['name'];
        this.store.select('albums').subscribe(
            (album: Album) => {
                this.album = album;
                this.currentAlbum = this.album.find(Album => {
                    return Album.albumTitle == currentPage
                });
            }
        );
    }

}

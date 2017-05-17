import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {AppStore} from "../../app.store";
import {Album} from "../../models/album.list";

@Component({
    selector: 'app-photo-single',
    templateUrl: './photo-single.component.html',
    styleUrls: ['./photo-single.component.css']
})

export class PhotoSingleComponent implements OnInit {

    private currentImage;
    private album;
    public toSinglePhoto() {};

    constructor(private route: ActivatedRoute,
                private store: Store<AppStore>,
                private router: Router) {
    }

    ngOnInit() {
        // let token = this.route.snapshot.fragment.split('=')[1];
        let currentPhoto = this.route.snapshot.params['id'];
        this.store.select('albums').subscribe(
            (album: Album) => {
                this.album = album;
                this.currentImage = this.album.find(Album => {
                    return Album.images.standard_resolution.url == currentPhoto
                });
                console.log('this.currentImage');
                console.log(this.currentImage);
            }
        );
        this.toSinglePhoto()
    }

}

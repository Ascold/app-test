import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Album} from '../../models/album.list';
import {Store} from '@ngrx/store';
import {AppStore} from '../../app.store';

@Component({
  selector: 'app-photo-list-item',
  templateUrl: './photo-list-item.component.html',
  styleUrls: ['./photo-list-item.component.css']
})
export class PhotoListItemComponent implements OnInit {
  private currentAlbum;
  private album;
  constructor(private route: ActivatedRoute,
              private store: Store<AppStore>,
              private router: Router) { }

  ngOnInit() {
      let currentPage = this.route.snapshot.params['name'];
      // this.store.select('albums').subscribe(
      //     (photos: Photo) => {
      //         this.currentPhoto = photos;
      //     });
      // this.store.select('user').subscribe(
      //     (user: User) => {
      //         this.currentUser = user;
      //     }
      // );
      // console.log('!!!!!!!!!!!!!!!!');
      // console.log(this.currentAlbum);
      // console.log(this.photos);
      // console.log(this.currentPhoto);
      this.store.select('albums').subscribe(
          (album: Album) => {
              this.album = album;
              console.log('!album');
              console.log(album);
             this.currentAlbum = this.album.find(Album => {return Album.albumTitle == currentPage});
              console.log(this.currentAlbum);
          }
      );
      // this.router.navigate(['/']);
  }

}

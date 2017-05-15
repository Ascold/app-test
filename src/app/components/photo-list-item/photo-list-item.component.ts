import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Album} from '../../models/album.list';
import {Store} from '@ngrx/store';
import {AppStore} from '../../app.store';
import {Photo} from '../../models/photo.list';

@Component({
  selector: 'app-photo-list-item',
  templateUrl: './photo-list-item.component.html',
  styleUrls: ['./photo-list-item.component.css']
})
export class PhotoListItemComponent implements OnInit {
  private photos: Photo[];
  private currentAlbum;
  private currentPhoto;
  private album;
  constructor(private route: ActivatedRoute, private store: Store<AppStore>) { }

  ngOnInit() {
      this.currentAlbum = this.route.snapshot.params['name'];
      this.store.select('albums').subscribe(
          (photos: Photo) => {
              this.currentPhoto = photos;
          });
      // this.store.select('user').subscribe(
      //     (user: User) => {
      //         this.currentUser = user;
      //     }
      // );
      console.log('!!!!!!!!!!!!!!!!');
      // console.log(this.currentAlbum);
      // console.log(this.photos);
      console.log(this.currentPhoto);
      this.store.select('albums').subscribe(
          (album: Album) => {
              this.album = album;
              console.log('!lalala!');
              console.log(album);
          }
      );
  }

}

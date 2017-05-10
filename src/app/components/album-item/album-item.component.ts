import {Component, OnInit} from '@angular/core';
import {AlbumListItem} from '../../models/album-list-item';
import {ApiService} from '../../services/api.service';

@Component({
    selector: 'app-album-item',
    templateUrl: './album-item.component.html',
    styleUrls: ['./album-item.component.css']
})
export class AlbumItemComponent implements OnInit {
    albums: AlbumListItem[] = [];
    name: string;

    constructor(private apiService: ApiService) {
    }

    ngOnInit() {
        if (this.apiService.getToken()) {
            this.apiService.getUserData().subscribe(
                response => {
                    this.name = response.data.full_name;
                    console.log(this.name);
                },
                error => {
                    alert(error);
                }
            );
            this.apiService.getData().subscribe(
                response => {
                    // this.testName = response.data[0].user.full_name;
                    // console.log(this.testName);
                    response.data.forEach(albumData => this.albums.push(new AlbumListItem(albumData)));
                    console.log(this.albums);
                    console.log('------------------------');
                },
                error => {
                    alert(error);
                }
            );
        }
    }

}

import {Photo} from './photo.list';

export class Album {
    albumTitle: string;
    albumThumbnailUrl: string;
    albumPhotosCount: number;
    albumCreatedAt: number;
    albumPhotos: Photo[] = [];

    constructor(data: any = {}) {
        this.albumTitle = data.caption.text;
        this.albumThumbnailUrl = data.images.thumbnail.url;
        this.albumPhotosCount = data.carousel_media.length;
        this.albumCreatedAt = data.created_time * 1000;
        // this.albumPhotos = data.carousel_media.forEach(photoData => this.albumPhotos.push(new Photo(photoData)));
    }

}

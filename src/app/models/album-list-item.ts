export class AlbumListItem {
    albumTitle: string;
    albumThumbnailUrl: string;
    albumPhotosCount: number;
    albumCreatedAt: number;

    constructor(data: any = {}) {
        this.albumTitle = data.caption.text;
        this.albumThumbnailUrl = data.images.thumbnail.url;
        this.albumPhotosCount = data.carousel_media.length;
        this.albumCreatedAt = data.created_time * 1000;
    }

    pastTime(hz: any) {
        hz = new Date();
        console.log(hz);
        return hz;
    }
}

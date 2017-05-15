export class Photo {
    thumbnail: string;
    low_resolution: string;
    standard_resolution: string;

    constructor(data: any = {}) {
        this.thumbnail = data.carousel_media.images.thumbnail.url;
        this.low_resolution = data.carousel_media.images.low_resolution.url;
        this.standard_resolution = data.carousel_media.images.standard_resolution.url;
    }
}
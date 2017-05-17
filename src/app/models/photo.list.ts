export class Photo {
    thumbnail: string;
    low_resolution: string;
    standard_resolution: string;

    constructor(data: any = {}) {
        this.thumbnail = data.images.thumbnail.url;
        this.low_resolution = data.images.low_resolution.url;
        this.standard_resolution = data.images.standard_resolution.url;
    }
}
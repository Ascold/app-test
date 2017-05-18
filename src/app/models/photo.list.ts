export class Photo {
    thumbnail: string;
    low_resolution: string;
    standard_resolution: string;
    id;
    private getIdFromUrl(url: String): String {
        let slice = url.split('/');
        return slice[slice.length - 1];
    }

    constructor(data: any = {}) {
        this.thumbnail = data.images.thumbnail.url;
        this.low_resolution = data.images.low_resolution.url;
        this.standard_resolution = data.images.standard_resolution.url;
        this.id = this.getIdFromUrl(data.images.thumbnail.url);
        console.log(this.standard_resolution);
    }
}

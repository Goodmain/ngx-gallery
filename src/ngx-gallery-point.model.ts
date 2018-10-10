export interface INgxGalleryPoint {
    x?: number;
    y?: number;
    label?: string;
    description?: string;
    url?: string;
}

export class NgxGalleryPoint implements INgxGalleryPoint {
    x?: number;
    y?: number;
    label?: string;
    description?: string;
    url?: string;

    constructor(obj: INgxGalleryPoint) {
        this.x = obj.x;
        this.y = obj.y;
        this.label = obj.label;
        this.description = obj.description;
        this.url = obj.url;
    }
}

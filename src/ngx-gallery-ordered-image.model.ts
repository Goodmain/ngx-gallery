import { SafeResourceUrl } from '@angular/platform-browser';
import { INgxGalleryPoint } from './ngx-gallery-point.model';

export interface INgxGalleryOrderedImage {
    src: string | SafeResourceUrl;
    points: INgxGalleryPoint[];
    index: number;
}

export class NgxGalleryOrderedImage implements INgxGalleryOrderedImage {
    src: string | SafeResourceUrl;
    index: number;
    points: INgxGalleryPoint[];

    constructor(obj: INgxGalleryOrderedImage) {
        this.src = obj.src;
        this.index = obj.index;
        this.points = obj.points || [];
    }
}

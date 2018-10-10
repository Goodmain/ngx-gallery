import { SafeResourceUrl } from '@angular/platform-browser';
import { INgxGalleryPoint, NgxGalleryPoint } from './ngx-gallery-point.model';

export interface INgxGalleryImage {
    small?: string | SafeResourceUrl;
    medium?: string | SafeResourceUrl;
    big?: string | SafeResourceUrl;
    description?: string;
    url?: string;
    label?: string;
    points?: INgxGalleryPoint[];
}

export class NgxGalleryImage implements INgxGalleryImage {
    small?: string | SafeResourceUrl;
    medium?: string | SafeResourceUrl;
    big?: string | SafeResourceUrl;
    description?: string;
    url?: string;
    label?: string;
    points?: NgxGalleryPoint[];

    constructor(obj: INgxGalleryImage) {
        function use<T>(source: T, defaultValue: T): T {
            return obj && (source !== undefined) ? source : defaultValue;
        }

        this.small = obj.small;
        this.medium = obj.medium;
        this.big = obj.big;
        this.description = obj.description;
        this.url = obj.url;
        this.label = obj.label;console.log('image', obj);

        if (obj && obj.points && obj.points.length) {
            obj.points = obj.points.map(point => new NgxGalleryPoint(point));
        }

        this.points = use(obj.points, []);
    }
}

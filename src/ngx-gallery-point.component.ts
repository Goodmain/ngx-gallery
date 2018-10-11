import { Component, Input, Output, EventEmitter, } from '@angular/core';
import { INgxGalleryPoint } from './ngx-gallery-point.model';

@Component({
    selector: 'ngx-gallery-point',
    template: `
        <div class="ngx-gallery-point-wrapper" (click)="handleClick()">
            {{point?.label}}
        </div>
    `,
    styleUrls: ['./ngx-gallery-point.component.scss']
})
export class NgxGalleryPointComponent {
    @Input() point: INgxGalleryPoint;
    @Output() onClick = new EventEmitter<INgxGalleryPoint>();

    handleClick(): void {
        this.onClick.emit(this.point);
    }
}

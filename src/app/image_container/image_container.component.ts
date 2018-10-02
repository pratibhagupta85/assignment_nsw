import { Component, Input } from "@angular/core";

@Component({
    selector: 'image-container',
    templateUrl: 'app/image_container/image_container.component.html'
})
export class ImageContainerComponent {
    size: number = 3;
    tile_number: number[];

    @Input()
    currimages: any[];

    constructor() {
        this.tile_number = Array(this.size).fill(0).map((x, i) => i);
    }
}
import { Component, Input, Inject } from "@angular/core";

@Component({
    selector: 'image-tile',
    templateUrl: 'app/image_tile/image_tile.component.html'
})
export class ImageTileComponent {
    image_id: string;

    @Input()
    img_link: string;

    @Input()
    img_title: string;

    showIframe() { }

}

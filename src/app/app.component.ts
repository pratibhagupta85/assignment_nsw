import { Component, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { ImageService } from './app.imageservice';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    providers: [ImageService]
})
export class AppComponent implements OnInit {
    name: string = "Angular 2";
    start: number = 0;
    size: number = 3;
    end: number = this.size;
    imageContainer: object[];
    images: object[];

    constructor(private _imageService: ImageService) {
        this.imageContainer = [];
    }

    ngOnInit() {
        this._imageService.getImagesData().subscribe((imageData) => {
            this.images = imageData;
            this.imageContainer.push(this.getImagesSet());
            console.log("images.......11022: " + this.images['title']);
        });
        
        
    }

    getAllImagesCount(): number {
        console.log("images: " + this.images);
        return this.images.length;
    }

    getImagesSet() {
        //this.start = start;
        //this.end = start+end;
        return this.images.slice(this.start, this.end);
    }

    addImageContainer() {
        this.imageContainer.push(this.getNextSet());
    }

    getNextSet() {
        this.start = this.end + 1;
        this.end = this.start + this.size;
        return this.getImagesSet();
    }
}
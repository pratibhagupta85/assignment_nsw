import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ImageService {
    constructor(private _http: Http) { }

    getImagesData(): Observable<object[]> {
        return this._http.get("http://jsonplaceholder.typicode.com/photos")
            .map((response: Response) => response.json());
    }

    getTestData(): string[] {
        return ['Hello', 'Akshita', 'Bansal', 'Cute'];
    }
}
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app_imageservice_1 = require("./app.imageservice");
var AppComponent = /** @class */ (function () {
    function AppComponent(_imageService) {
        this._imageService = _imageService;
        this.name = "Angular 2";
        this.start = 0;
        this.size = 3;
        this.end = this.size;
        this.imageContainer = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._imageService.getImagesData().subscribe(function (imageData) {
            _this.images = imageData;
            _this.imageContainer.push(_this.getImagesSet());
            console.log("images.......11022: " + _this.images['title']);
        });
    };
    AppComponent.prototype.getAllImagesCount = function () {
        console.log("images: " + this.images);
        return this.images.length;
    };
    AppComponent.prototype.getImagesSet = function () {
        //this.start = start;
        //this.end = start+end;
        return this.images.slice(this.start, this.end);
    };
    AppComponent.prototype.addImageContainer = function () {
        this.imageContainer.push(this.getNextSet());
    };
    AppComponent.prototype.getNextSet = function () {
        this.start = this.end + 1;
        this.end = this.start + this.size;
        return this.getImagesSet();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/app.component.html',
            providers: [app_imageservice_1.ImageService]
        }),
        __metadata("design:paramtypes", [app_imageservice_1.ImageService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map
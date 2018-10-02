import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ImageContainerComponent } from './image_container/image_container.component';
import { ImageTileComponent } from './image_tile/image_tile.component';

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule],
    declarations: [AppComponent, ImageContainerComponent, ImageTileComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

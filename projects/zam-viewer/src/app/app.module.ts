import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import { VgCoreModule } from '@videogular/ngx-videogular/core';VgCoreModule
// import { VgControlsModule } from '@videogular/ngx-videogular/controls';VgControlsModule
// import { VgOverlayPlayModule } from '@videogular/ngx-videogular/overlay-play';VgOverlayPlayModule
// import { VgBufferingModule } from '@videogular/ngx-videogular/buffering';VgBufferingModule
import { HttpClientModule } from '@angular/common/http';
import {Component} from '@angular/core';
import {YouTubePlayer} from '@angular/youtube-player';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    YouTubePlayer,
    Component
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

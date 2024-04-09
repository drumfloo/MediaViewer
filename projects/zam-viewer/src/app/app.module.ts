import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatCard } from '@angular/material/card';
import {YouTubePlayer} from '@angular/youtube-player';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    YouTubePlayerModule,
    MatCard,
    YouTubePlayer
    
    // HttpClientModule,
    // YouTubePlayer,
    // Component
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

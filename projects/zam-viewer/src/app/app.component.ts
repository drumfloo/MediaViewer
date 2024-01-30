import { Component, HostBinding, ViewChild } from '@angular/core';
import {YouTubePlayer, YOUTUBE_PLAYER_CONFIG} from '@angular/youtube-player';
//import {NgModule} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

@NgModule({
  imports: [YouTubePlayer],
  providers: [{
    provide: YOUTUBE_PLAYER_CONFIG,
    useValue: {
      loadApi: false
    }
  }]
})


export class AppComponent {
  title = 'ZAM_Viewer';

  // @HostBinding("style.--pointer-style")
  // public cursor: 'pointer' | 'none' = 'pointer';




  
}







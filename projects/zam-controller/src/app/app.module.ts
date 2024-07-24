import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { GridContentComponent } from './components/grid-content/grid-content.component';
import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {YouTubePlayer} from '@angular/youtube-player';
import { NgxSpinnerModule } from 'ngx-spinner';

import { MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from './components/dialog/dialog.component';
import { SettingsComponent } from "./components/settings/settings.component";
import { YoutubeService } from './components/grid-content/youtube.service';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    GridContentComponent,
    DialogComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatGridListModule,
    MatCardModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    YouTubePlayer,
    NgxSpinnerModule,
    MatDialogModule,
    SettingsComponent,
],
  providers: [
    YoutubeService,
    {provide: APP_INITIALIZER,
      useFactory: (yts: YoutubeService) => () => yts.loadCredentials(),
      deps: [YoutubeService],
      multi: true
    }
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

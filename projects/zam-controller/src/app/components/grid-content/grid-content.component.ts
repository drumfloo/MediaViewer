import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { YoutubeService } from './youtube.service';
import { Observable, Subject, takeUntil } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import { ComService } from '../../services/com.service';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-grid-content',
  templateUrl: './grid-content.component.html',
  styleUrls: ['./grid-content.component.scss']
})


export class GridContentComponent {

  videos: any[] = [];
  private unsubscribe$: Subject<any> = new Subject();
  private ytWatchLink = "https://www.youtube.com/watch?v=";

  constructor(private spinner: NgxSpinnerService, private youTubeService: YoutubeService, protected comService: ComService) {
    this.comService = comService;
   }


  ngOnInit() {
    this.spinner.show()
    setTimeout(()=>
    {
      this.spinner.hide()
    },3000)
    //this.videos = [];
    this.youTubeService
      .getVideosForPlaylist('PLNf7WrW3VV-yW71-xs-QVc0bvZh32_qVC', 12) 
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((list: any)=> {
        for (let element of list["items"]) {
          this.videos.push(element)
        }
        console.log(this.videos) // DEBUG
      });  
  } 

  public onCardClick(cardName: any){ 
    //window.open(cardName, '_blank');
    //window.open(cardName.id.videoId)
    
    console.log(this.ytWatchLink + cardName)
    // let wss = new WebSocketService();
    // wss.send(this.ytWatchLink + cardName);
  }
  
  sendURL(url: string) {
    this.comService.send("youtube", {
      "url" : this.ytWatchLink + url
    })
  }

}



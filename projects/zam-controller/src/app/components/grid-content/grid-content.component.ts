import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { YoutubeService } from './youtube.service';
import { Observable, Subject, takeUntil } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import { ComService } from '../../services/com.service';
import { SharedService } from 'projects/services/shared.service';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-grid-content',
  templateUrl: './grid-content.component.html',
  styleUrls: ['./grid-content.component.scss']
})


export class GridContentComponent {

  public videos: any[] = [];
  private unsubscribe$: Subject<any> = new Subject();
  //private ytWatchLink = "https://www.youtube.com/watch?v=";

  constructor(private spinner: NgxSpinnerService, private youTubeService: YoutubeService, protected comService: ComService, private sharedService: SharedService) {
    this.comService = comService;
    this.youTubeService = youTubeService;
  }


  ngOnInit() {
    this.spinner.show()
    setTimeout(()=>
    {
      this.spinner.hide()
    },3000)
    //this.videos = [];

    this.comService.subscribe("config", (msg: any) => {
      if(msg.cmd == "get_config") {
        this.comService.send("config", {
          url: this.youTubeService   
        });
      }
    })

    
    this.youTubeService
      .getVideosForPlaylist()   //'PLNf7WrW3VV-yW71-xs-QVc0bvZh32_qVC'
      .pipe(takeUntil(this.unsubscribe$))
      .forEach((list: any)=> {
        for (let element of list["items"]) {
          this.videos.push(element) 
          
          // TEST
          // gets video of position 0 and sends it to server socket-channel "youtube"
          // while starting Controller-App
          if(element.snippet.position == 0){
            this.sharedService.setData(element.snippet.resourceId.videoId)
            this.comService.send("youtube", {
              "url" : element.snippet.resourceId.videoId
            })
            
          }                 
        
        }        
    });  
  } 

  sendURL(url: string, position: any) {
    this.comService.send("youtube", {
      "url" : url,
      "position" : position
    })
  }

  

}




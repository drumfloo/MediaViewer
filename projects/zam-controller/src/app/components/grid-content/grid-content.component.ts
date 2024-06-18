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
    this.comService.subscribe("requestData", () => {
      this.apiReplyer();
    });
    this.apiReplyer();
  } 


  sendToView(url: string, position: any) {
    this.comService.send("youtube", {
      "url" : url,
      "position" : position
    })
  }


  sendDefaultVideo(list: any){
    if(list[0].snippet.position == 0){
      this.sharedService.setData(list[0].snippet.resourceId.videoId)
      this.comService.send("defaultVideo", {
        "url" : list[0].snippet.resourceId.videoId
      })

      this.comService.subscribe("config", (msg: any) => {
        if(msg.cmd == "get_config") {
          this.comService.send("config", {
            url: list[0].snippet.resourceId.videoId
          });
        }
      })
      
    }

  }

  apiReplyer(){
    this.spinner.show()
    setTimeout(()=>
    {
      this.spinner.hide()
    },3000)

    
    this.youTubeService
      .getVideosForPlaylist()   //'PLNf7WrW3VV-yW71-xs-QVc0bvZh32_qVC'
      .pipe(takeUntil(this.unsubscribe$))
      .forEach((list: any)=> {
        for (let element of list["items"]) {
          this.videos.push(element) 
          console.log(element)
          
          this.comService.subscribe("config", (msg: any) => {
            if(msg.cmd == "get_config") {
              this.comService.send("config", {
                url: element.snippet.resourceId.videoId
              });
            }
          })
                           
        
        }
        this.sendDefaultVideo(list["items"]);     
    });

    
  }

  

}




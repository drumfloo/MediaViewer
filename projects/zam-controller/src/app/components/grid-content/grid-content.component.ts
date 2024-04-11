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
  //public loadedVideos: any[] = []
  //private ytWatchLink = "https://www.youtube.com/watch?v=";

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
          console.log(element)
          //this.loadedVideos.push(element.snippet.resourceId.videoId)
          
        }
      //console.log(this.loadedVideos)
        
    });  
  } 
  
  sendURL(url: string, position: any) {
    this.comService.send("youtube", {
      "url" : url,
      "position" : position
    })
  }

}



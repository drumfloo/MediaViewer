import { Component, HostListener, inject } from '@angular/core';
import { Injectable } from '@angular/core';
import { YoutubeService } from './youtube.service';
import { Subject, takeUntil } from 'rxjs';
import { ComService } from '../../services/com.service';
import { SharedService } from 'projects/zam-controller/shared.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-grid-content',
  templateUrl: './grid-content.component.html',
  styleUrls: ['./grid-content.component.scss']
})


export class GridContentComponent {

  readonly dialog: MatDialog = inject(MatDialog);
  readonly settings: MatDialog = inject(MatDialog);

  public videos: any[] = [];
  private unsubscribe$: Subject<any> = new Subject();
  // public schowSettings = true;

  constructor(private youTubeService: YoutubeService, protected comService: ComService, private sharedService: SharedService) {
    this.comService = comService;
    this.youTubeService = youTubeService;
    
  }


  ngOnInit() {
    this.comService.subscribe("requestData", () => {
      this.sendDefaultVideo(this.videos);
    });
    
    this.loadVideos(); // (864*100000)
    //setInterval(this.loadVideos, 3000);  

  }


  loadVideos() {
    this.youTubeService
      .getVideosForPlaylist()   //'PLNf7WrW3VV-yW71-xs-QVc0bvZh32_qVC'
      .pipe(takeUntil(this.unsubscribe$))
      .forEach((list: any)=> {
        this.videos = [];
        for (let element of list["items"]) {
          this.videos.push(element) 
        }
        this.sendDefaultVideo(this.videos);
    }); 
  }

  sendToView(url: string, position: any) {
    this.comService.send("youtube", {
      "url" : url,
      "position" : position
    })

    this.dialog.open(DialogComponent, {
      data: this.videos[position].snippet,       
    });
  }



  sendDefaultVideo(list: any){
    if(list[0].snippet.position == 0){
      this.sharedService.setData(list[0].snippet.resourceId.videoId)
      this.comService.send("defaultVideo", {
        "url" : list[0].snippet.resourceId.videoId
      })
    }
  }



}




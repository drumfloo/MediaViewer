import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //X
import { YoutubeService } from 'projects/zam-controller/youtube.service';
import { Subject, takeUntil } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';


declare var require: any;


@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-grid-content',
  templateUrl: './grid-content.component.html',
  styleUrls: ['./grid-content.component.scss']
})


export class GridContentComponent {

  //public sites: any[] = [];
  videos: any[] = [];
  private unsubscribe$: Subject<any> = new Subject();

  constructor(private spinner: NgxSpinnerService, private youTubeService: YoutubeService) { }


  ngOnInit() {
    this.spinner.show()
    setTimeout(()=>
    {
      this.spinner.hide()
    },3000)
    this.videos = [];
    this.youTubeService
      .getVideosForChanel('UCEv64d6puxi9PSGzn7_otTw', 15)
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
    window.open(cardName.id.videoId)
  }


  // Not in use
  // public deleteCard(cardName: any){
  //   console.log(cardName + " deleted");
  //   this.sites = this.sites.filter(value => value != cardName);
  // }


  
  
  // gets called at startup through ngOnInit()
  // get data from database/PIM
  // public fetchData(){
  //   const jsonData = require('../../data.json'); 

  //   for(const [key, value] of Object.entries(jsonData)){
  //     this.sites.push([`${key}`, `${value}`]);
  //   }
  //   console.log(Object.entries(jsonData));
  // }

}

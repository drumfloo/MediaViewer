import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { YoutubeService } from 'projects/zam-controller/youtube.service';
import { Subject, takeUntil } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';


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

  constructor(private spinner: NgxSpinnerService, private youTubeService: YoutubeService) { }

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
    window.open(cardName.id.videoId)
  }


  // Not in use
  // public deleteCard(cardName: any){
  //   console.log(cardName + " deleted");
  //   this.sites = this.sites.filter(value => value != cardName);
  // }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, takeUntil } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  apiKey : string = 'AIzaSyA4owwiGHR9OOHP_kCZdDGUBWwyreQryR8';
  // public videos: any[] = []; // X
  // private unsubscribe$: Subject<any> = new Subject();

  constructor(public http: HttpClient) { } // X

    getVideosForChanel(channel: any, maxResults: any): Observable<Object> {
    let url = 'https://www.googleapis.com/youtube/v3/search?key=' + this.apiKey + '&channelId=' + channel + '&order=date&part=snippet &type=video,id&maxResults=' + maxResults
    return this.http.get(url)
      .pipe(map((res) => {
        return res;
      }))
  }

  // ngOnInit() {
  //   this.spinner.show()
  //   setTimeout(()=>
  //   {
  //   this.spinner.hide()
  //   },3000)
  //   this.videos = [];
  //   this.youTubeService
  //     .getVideosForChanel('UC_LtA_EtCr7Jp5ofOsYt18g', 15)
  //     .pipe(takeUntil(this.unsubscribe$))
  //     .subscribe((list: any) => {
  //       for (let element of list['items']) {
  //         this.videos.push(element)
  //       }
  //     });
  // }


}
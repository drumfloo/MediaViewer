import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, takeUntil } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  apiKey : string = 'AIzaSyDvpVFzT6jJulm-w6aw7riMEK8CDy5D4p4';

  constructor(public http: HttpClient) { } 

    getVideosForChanel(channel: any, maxResults: any): Observable<Object> {
    let url = 'https://www.googleapis.com/youtube/v3/search?key=' + this.apiKey + '&channelId=' + channel + '&order=date&part=snippet &type=video,id&maxResults=' + maxResults
    return this.http.get(url)
      .pipe(map((res) => {
        return res;
      }))
  }
}
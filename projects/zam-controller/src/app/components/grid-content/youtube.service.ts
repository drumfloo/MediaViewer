import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, takeUntil } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  apiKey : string = 'AIzaSyDvpVFzT6jJulm-w6aw7riMEK8CDy5D4p4';
  playListId: string = 'PLNf7WrW3VV-yW71-xs-QVc0bvZh32_qVC' // nicht öffentliche Liste ZimmerGroup Kanal
  maxResults: number = 50
  // ZimmerGroup Channel ID  - 'UCEv64d6puxi9PSGzn7_otTw'
  
  constructor(public http: HttpClient) { } 

  getVideosForPlaylist(): Observable<any> {
    let url = 'https://www.googleapis.com/youtube/v3/playlistItems?key=' + this.apiKey + '&playlistId=' + this.playListId + '&order=date&part=snippet &type=video,id&maxResults=' + this.maxResults 
    return this.http.get(url)
    .pipe(map((res) => {
      return res;
    }))
  }
}



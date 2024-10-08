import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  
  // apiKey : string = 'AIzaSyDvpVFzT6jJulm-w6aw7riMEK8CDy5D4p4';
  // playListId: string = 'PLNf7WrW3VV-yW71-xs-QVc0bvZh32_qVC' // nicht öffentliche Liste ZimmerGroup Kanal
  // maxResults: number = 50
  jsonPath = '../../../assets/credentials.json';
  apiKey = '';
  playListId = '';
  maxResults = 50;


  constructor(public http: HttpClient) {  
    this.loadCredentials();
  } 


  // //ZimmerGroup Channel ID  - 'UCEv64d6puxi9PSGzn7_otTw'

  getVideosForPlaylist(): Observable<any> {
    let url = 'https://www.googleapis.com/youtube/v3/playlistItems?key=' + this.apiKey + '&playlistId=' + this.playListId + '&order=date&part=snippet &type=video,id&maxResults=' + this.maxResults 
    return this.http.get(url)
    .pipe(map((res) => {
      return res;
    }))
  }

  // private
  loadCredentials(): Promise<void> {
    return this.getCredentials().toPromise().then(credentials => {
      this.apiKey = credentials.ApiKey;
      this.playListId = credentials.PlayListId;
    })

  }


  getCredentials(): Observable<any> {
    return this.http.get<any>(this.jsonPath);
  }



}



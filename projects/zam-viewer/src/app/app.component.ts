import { AfterViewInit, Component, OnInit, ViewChild, ViewRef } from '@angular/core'; 
import { ComService } from './service/com.service';
import { SharedService } from 'projects/services/shared.service';
import { YouTubePlayer } from '@angular/youtube-player';

@Component({ 
	selector: 'app-root', 
	templateUrl: './app.component.html', 
	styleUrls: ['./app.component.scss']	
}) 

export class AppComponent implements OnInit { 
	videoID: any;
	defaultVideoID: any;
	subSharedService: any;

	screenWidth = window.screen.width	//innerWidth;
	screenHeight = window.screen.height	//innerHeight;

	@ViewChild(YouTubePlayer) youtubePlayer?: YouTubePlayer;



	constructor(protected comService: ComService, private sharedService: SharedService) {
		this.comService = comService;

		this.sharedService.dataValue$.subscribe(subSharedService =>{
			this.subSharedService = subSharedService;
		  })
	};
	
	
	ngOnInit() {
		this.comService.send("requestData", {});

		this.comService.subscribe("defaultVideo", (msg: any) => {
			this.defaultVideoID = msg.url;
			if (this.youtubePlayer == undefined) {
				this.videoID = this.defaultVideoID;
			} else {
				this.endCheckEvent(this.youtubePlayer?.getPlayerState());
			}
			console.log(msg);
		})
				
		this.comService.subscribe("youtube", (msg: any) => {
			this.videoID = msg.url;
			console.log(msg);
		})
				
		//this.endCheckEvent(this.videoID);
		//setTimeout(() => {this.comService.send("config", {cmd : "get_config"})}, 1000)
	
	}

	listenToChanges(event: YT.OnStateChangeEvent){
		console.log(event);
		this.endCheckEvent(event.data);
	}

	endCheckEvent(state?: YT.PlayerState) {
		if(state === YT.PlayerState.ENDED){
			this.videoID = this.defaultVideoID;
			this.youtubePlayer?.playVideo();
		}
	}


}


// node server.js

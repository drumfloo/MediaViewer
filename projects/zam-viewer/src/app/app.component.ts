import { Component, OnInit, ViewChild } from '@angular/core'; 
import { ComService } from './service/com.service';
// import { YouTubePlayer } from '@angular/youtube-player';
// import { YouTubePlayerModule } from '@angular/youtube-player';


@Component({ 
	selector: 'app-root', 
	templateUrl: './app.component.html', 
	styleUrls: ['./app.component.scss']
	
}) 


export class AppComponent implements OnInit { 
	title = 'frontEnd'; 
	message: any; 
	videoID: any;
	
	screenWidth = window.screen.width	//innerWidth;
	screenHeight = window.screen.height	//innerHeight;

	constructor(protected comService: ComService) {
		this.comService = comService;
		
	 }; 

	
	ngOnInit() { 
		this.comService.subscribe("youtube", (msg: any) => {
			this.videoID = msg.url;
			
		})
		//document.body.style.cursor = "none"
		//console.log(this.screenWidth, this.screenHeight)
		
	}

}


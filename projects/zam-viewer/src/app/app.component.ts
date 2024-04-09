import { Component, OnInit } from '@angular/core'; 
import { ComService } from './service/com.service';
import { YouTubePlayer } from '@angular/youtube-player';



@Component({ 
	selector: 'app-root', 
	templateUrl: './app.component.html', 
	styleUrls: ['./app.component.css'] 
}) 
export class AppComponent implements OnInit { 
	title = 'frontEnd'; 
	message: any; 
	url: String = "";

	constructor(protected comService: ComService) {
		this.comService = comService;
	 }; 

	ngOnInit() { 
		this.comService.subscribe("youtube", (msg: any) => {
			this.url = msg.url;
		})

	}

	callback(){
		console.log("Callback!")
	}


}


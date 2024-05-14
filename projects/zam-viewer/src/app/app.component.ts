import { Component, OnInit, ViewChild } from '@angular/core'; 
import { ComService } from './service/com.service';
import { SharedService } from 'projects/services/shared.service';

@Component({ 
	selector: 'app-root', 
	templateUrl: './app.component.html', 
	styleUrls: ['./app.component.scss']	
}) 

export class AppComponent implements OnInit { 
	videoID: any;
	defaultVideoID: any;
	//defaultVid = "https://www.youtube.com/watch?v=qhX1miCidEo&ab_channel=WELTNachrichtensender";
	subSharedService: any;

	screenWidth = window.screen.width	//innerWidth;
	screenHeight = window.screen.height	//innerHeight;



	constructor(protected comService: ComService, private sharedService: SharedService) {
		this.comService = comService;

		this.sharedService.dataValue$.subscribe(subSharedService =>{
			this.subSharedService = subSharedService;
		  })

	};
	
	
	ngOnInit() { 

		this.comService.subscribe("config", (msg: any) => {
			this.defaultVideoID = msg.url;
		})
		
		
		this.comService.subscribe("youtube", (msg: any) => {
			//console.log(msg)
			this.videoID = msg.url;
		})
				
		this.subSharedService = this.sharedService.getData()
		
		setTimeout(() => {this.comService.send("config", {cmd : "get_config"})}, 1000)
		//this.comService.send("config", {cmd : "get_config"});
	}


}


// node server.js

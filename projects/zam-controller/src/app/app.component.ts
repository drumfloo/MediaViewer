import { Component } from '@angular/core';
// import { NgxSpinnerService } from 'ngx-spinner';
// import { YoutubeService } from 'src/app/youtube.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ZAM_Controller';
  // videos: any[] = []; // X

  // constructor(private spinner: NgxSpinnerService, private youTubeService: YoutubeService){}

  //X
  // ngOnInit() {
  //   this.spinner.show()
  //   setTimeout(()=>
  //   {
  //   this.spinner.hide()
  //   },3000)
  //   this.videos = [];
  //   this.youTubeService
  //   .getVideosForChanel('UC_LtA_EtCr7Jp5ofOsYt18g', 15)
  //   .pipe(takeUntil(this.unsubscribe$))
  //   .subscribe(lista => {
  //   for (let element of lista["items"]) {
  //   this.videos.push(element)
  //   }
  //   });
  //   }

}

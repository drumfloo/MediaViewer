import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ZAM_Viewer';

  container = document.querySelector("#player")
  

  // hideMouse(){
  //   document.body.requestPointerLock();
  // }

  // ngOnInit(){
  //   this.hideMouse()
  // }
}




import { Component, HostBinding, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ZAM_Viewer';

  @HostBinding("style.--pointer-style")
  public cursor: 'pointer' | 'none' = 'pointer';



  
}







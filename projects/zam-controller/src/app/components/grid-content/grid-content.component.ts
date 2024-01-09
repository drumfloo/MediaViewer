import { Component } from '@angular/core';
declare var require: any;

@Component({
  selector: 'app-grid-content',
  templateUrl: './grid-content.component.html',
  styleUrls: ['./grid-content.component.scss']
})



export class GridContentComponent {

  public sites: any[] = [] 
  

  public ngOnInit(): void{
    this.fetchData();
  } 
 

  public onCardClick(cardName: any){ 
    window.open(cardName, '_blank');
  }

  // Not in use
  // public deleteCard(cardName: any){
  //   console.log(cardName + " deleted");
  //   this.sites = this.sites.filter(value => value != cardName);
  // }

  // gets called at startup through ngOnInit()
  // get data from database/PIM
  public fetchData(){
    const jsonData = require('../../data.json'); 

    for(const [key, value] of Object.entries(jsonData)){
      this.sites.push([`${key}`, `${value}`]);
    }
    console.log(Object.entries(jsonData));
  }

}

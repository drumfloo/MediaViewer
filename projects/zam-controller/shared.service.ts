import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
    
    private dataSource = new Subject()
    dataValue$ = this.dataSource.asObservable();
  
  
    constructor() { }
   
    setData(data: any){
      this.dataSource.next(data)
      console.log("datasoure is set:", this.dataSource)
    }

    getData(){
      return this.dataSource

    }


}
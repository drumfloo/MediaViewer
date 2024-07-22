import { Component, inject, OnInit } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent implements OnInit{
  readonly data: any = inject<any>(MAT_DIALOG_DATA);

  public youTubeAPI: FormControl = new FormControl(); 
  public apiKey: FormControl = new FormControl();
  public playlistID: FormControl = new FormControl();
  
  jsonPath = '../../../assets/credentials.json'; //'./projects/zam-controller/src/assets/credentials.json' 

  credentials: any = {
    ytApi: "",
    ApiKey: "",
    plId: ""
  }
  
  constructor(private httpClient: HttpClient){
    
  }

  ngOnInit(){    
    // this.youTubeAPI.valueChanges.subscribe((v) =>{
    //   this.credentials.ApiKey = v;
    // })

    // this.apiKey.valueChanges.subscribe((v) =>{
    //   this.credentials.ApiKey = v;
    // })

    // this.playlistID.valueChanges.subscribe((v) =>{
    //   this.credentials.plId = v;  
    // })



    this.getCredentials().subscribe(data => {
      this.credentials = data;
      // this.youTubeAPI.getRawValue()
      // this.apiKey.getRawValue();
      // this.playlistID.getRawValue();

      this.youTubeAPI.setValue(data.ytApi);
      this.apiKey.setValue(data.ApiKey);
      this.playlistID.setValue(data.plId);
    });


  }


  getCredentials(): Observable<any> {
    return this.httpClient.get(this.jsonPath);
  }

  updateCredentials(data: any): Observable<any> {
    return this.httpClient.put(this.jsonPath, data);
  }

  
  submitNewCredentials(){
    this.updateCredentials(this.credentials).subscribe((response: any) => {
      console.log("Credentials updated...", response);
    })

    // this.fs.readFile('../../../assets/credentials.json', 'utf-8', (err: any, data: any) => {
    //   if(err){ throw err }
      
    //   if(this.credentials.ytApi !== data.ytApi){this.credentials.ytApi = data.ytApi};
    //   if(this.credentials.ApiKey !== data.ApiKey){this.credentials.ApiKey = data.ytApi};
    //   if(this.credentials.plId !== data.plId){this.credentials.plId = data.plId};
    // })

    // let newCredentials = JSON.stringify(this.credentials)
    // this.fs.writeFile('../../../assets/credentials.json', 'utf-8', (err: any, data: any) => {
    //   if(err){throw err}
    
    // })

  }
}



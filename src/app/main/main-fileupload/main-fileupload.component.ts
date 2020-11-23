import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-main-fileupload',
  templateUrl: './main-fileupload.component.html',
  styleUrls: ['./main-fileupload.component.css']
})
export class MainFileuploadComponent implements OnInit {

  fileToUpload: File = null;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  handleFileInput(event){
    this.fileToUpload=<File>event.target.files[0]
    console.log(this.fileToUpload.name);
  }

  Upload(){
    const fl=new FormData();
    fl.append("image",this.fileToUpload,this.fileToUpload.name);
    this.http.post('https://localhost:5001/api/fileupload',fl).subscribe(res=>console.log(res));
  }


}

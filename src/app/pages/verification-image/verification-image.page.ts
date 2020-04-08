import { Component, OnInit } from '@angular/core';
import { dev } from '../../config/dev';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-verification-image',
  templateUrl: './verification-image.page.html',
  styleUrls: ['./verification-image.page.scss'],
})
export class VerificationImagePage implements OnInit {

  fileToUpload: File = null;
  user: String;
  filename: String;
  amount: String;
  file: any;
  users: any;
  profile: any;

  url = dev.connect;

  constructor(private http: HttpClient) {
    this.getAllUsers();
    this.getUser();
   }

  ngOnInit() {
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

  upload(){
    this.postFile(this.fileToUpload, ('/' + this.fileToUpload.name)).subscribe(data => {
      console.log(data);
       alert('Image was uploaded successfully for verification');
       this.user = '';
       this.amount = '';
       this.filename = '';
       this.fileToUpload = null;
       this.file = '';
    });
  }
  postFile(fileToUpload: File, filename) {

    const formData: FormData = new FormData()
    formData.append('sampleFile', fileToUpload, filename);
    formData.append('user', this.user.toString());
    formData.append('uploadedby', this.profile);
    formData.append('amount', this.amount.toString());
    formData.append('namefile', this.filename.toString());

    return this.http
      .post(this.url+'/api/files', formData);
  }

  getAllUsers(){
    this.http.get(this.url + '/api/user/getAll').subscribe((data) => {
       this.users = data;
    });
  }
  getUser(){
   this.profile = localStorage.getItem('profile');
  }

}



import { Component, OnInit } from '@angular/core';
import { Inductionchecklist } from '../../models/inductionchecklist';
import { InductionchecklistService } from '../../services/inductionchecklist.service';
import { Router } from '@angular/router';
import { JobcardService } from '../../services/jobcard.service';
import { LoadingController } from '@ionic/angular';
import { dev } from '../../config/dev';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-inductionchecklist-create',
  templateUrl: './inductionchecklist-create.page.html',
  styleUrls: ['./inductionchecklist-create.page.scss'],
})
export class InductionchecklistCreatePage implements OnInit {
  data: Inductionchecklist;
  jobcardData: any;

  users: any;
  profile: any;

  url = dev.connect;

 
  constructor(
    private http: HttpClient,
    public apiService: InductionchecklistService,
    public router: Router,
    public jobService: JobcardService,
    public loadingController: LoadingController
  ) {
    this.data = new Inductionchecklist();
    this.jobcardData = [];
    this.getAllUsers();
    this.getUser();
  }
 
  ngOnInit() {
    this.getAlljobcards();

  }
 
  submitForm() {
    this.apiService.createItem(this.data).subscribe((response) => {
      this.router.navigate(['home-results']);
    });
 
  }
  async getAlljobcards() {
    // Get saved list of students
    const loading = await this.loadingController.create({
      message: 'Loading'

    });
    this.apiService.getList().subscribe(response => {
      console.log(response);
      this.jobcardData = response;
      loading.dismiss();
    });
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

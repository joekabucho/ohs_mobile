import { Component, OnInit } from '@angular/core';
import { Jobcards } from '../models/jobcards';
import { JobcardService } from '../services/jobcard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jobcard-create',
  templateUrl: './jobcard-create.page.html',
  styleUrls: ['./jobcard-create.page.scss'],
})
export class JobcardCreatePage implements OnInit {

  data: Jobcards;

  constructor(
    public apiService: JobcardService,
    public router: Router
  ) {
    this.data = new Jobcards();
  }

  ngOnInit() {
  }

  submitForm() {
    this.apiService.createItem(this.data).subscribe((response) => {
      this.router.navigate(['jobcardlist']);
    });

  }

}

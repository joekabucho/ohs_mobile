import { Component, OnInit } from '@angular/core';
import { JobcardService } from '../services/jobcard.service';

@Component({
  selector: 'app-jobcard-list',
  templateUrl: './jobcard-list.page.html',
  styleUrls: ['./jobcard-list.page.scss'],
})
export class JobcardListPage implements OnInit {

  jobcardData: any;

  constructor(
      public apiService: JobcardService
  ) {
    this.jobcardData = [];
  }

  ngOnInit() {
    this.getAlljobcards();
  }

  getAlljobcards() {
    // Get saved list of students
    this.apiService.getList().subscribe(response => {
      console.log(response);
      this.jobcardData = response;
    });
  }


  delete(item) {
    // Delete item in Student data
    this.apiService.deleteItem(item._id).subscribe(Response => {
      // Update list after delete is successful
      this.getAlljobcards();
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { InductionchecklistService } from '../services/inductionchecklist.service';


@Component({
  selector: 'app-inductionchecklist-list',
  templateUrl: './inductionchecklist-list.page.html',
  styleUrls: ['./inductionchecklist-list.page.scss'],
})
export class InductionchecklistListPage implements OnInit {

  inductionData: any;

  constructor(
      public apiService: InductionchecklistService
  ) {
    this.inductionData = [];
  }

  ngOnInit() {
    this.getAllChecklists();
  }

  getAllChecklists() {
    // Get saved list of students
    this.apiService.getList().subscribe(response => {
      console.log(response);
      this.inductionData = response;
    });
  }


  delete(item) {
    // Delete item in Student data
    this.apiService.deleteItem(item._id).subscribe(Response => {
      // Update list after delete is successful
      this.getAllChecklists();
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { WorkPermitService } from '../services/workpermit.service';

@Component({
  selector: 'app-workpermit-list',
  templateUrl: './workpermit-list.page.html',
  styleUrls: ['./workpermit-list.page.scss'],
})
export class WorkpermitListPage implements OnInit {

    workpermitData: any;

    constructor(
        public apiService: WorkPermitService
    ) {
        this.workpermitData = [];
    }

    ngOnInit() {
        this.getAllworkpermits();
    }

    getAllworkpermits() {
        // Get saved list of students
        this.apiService.getList().subscribe(response => {
            console.log(response);
            this.workpermitData = response;
        });
    }


    delete(item) {
        // Delete item in Student data
        this.apiService.deleteItem(item._id).subscribe(Response => {
            // Update list after delete is successful
            this.getAllworkpermits();
        });
    }

}

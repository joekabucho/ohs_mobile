import { Component, OnInit } from '@angular/core';
import { ToolboxTalkService } from '../services/toolboxtalks.service';

@Component({
  selector: 'app-toolboxtalks-list',
  templateUrl: './toolboxtalks-list.page.html',
  styleUrls: ['./toolboxtalks-list.page.scss'],
})
export class ToolboxtalksListPage implements OnInit {

  toolboxData: any;

  constructor(
      public apiService: ToolboxTalkService
  ) {
    this.toolboxData = [];
  }

  ngOnInit() {
    this.getAlltoolbox();
  }

  getAlltoolbox() {
    // Get saved list of students
    this.apiService.getList().subscribe(response => {
      console.log(response);
      this.toolboxData = response;
    });
  }


  delete(item) {
    // Delete item in Student data
    this.apiService.deleteItem(item._id).subscribe(Response => {
      // Update list after delete is successful
      this.getAlltoolbox();
    });
  }

}

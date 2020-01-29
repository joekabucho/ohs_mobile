import { Component, OnInit } from '@angular/core';
import { Toolboxtalks } from '../models/toolboxtalks';
import { ActivatedRoute, Router } from '@angular/router';
import { ToolboxTalkService } from '../services/toolboxtalks.service';


@Component({
  selector: 'app-toolboxtalks-edit',
  templateUrl: './toolboxtalks-edit.page.html',
  styleUrls: ['./toolboxtalks-edit.page.scss'],
})
export class ToolboxtalksEditPage implements OnInit {

  // tslint:disable-next-line:variable-name
  _id: number;
  data: Toolboxtalks;

  constructor(
      public activatedRoute: ActivatedRoute,
      public router: Router,
      public apiService: ToolboxTalkService
  ) {
    this.data = new Toolboxtalks();
  }

  ngOnInit() {
    this._id = this.activatedRoute.snapshot.params["_id"];
    // get item details using id
    this.apiService.getItem(this._id).subscribe(response => {
      console.log(response);
      this.data = response;
    });
  }

  update() {
    // Update item by taking id and updated data object
    this.apiService.updateItem(this._id, this.data).subscribe(response => {
      this.router.navigate(['toolboxtalkslist']);
    });
  }

}

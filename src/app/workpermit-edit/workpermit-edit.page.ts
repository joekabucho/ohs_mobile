import { Component, OnInit } from '@angular/core';
import { Workpermit } from '../models/workpermit';
import { ActivatedRoute, Router } from '@angular/router';
import { WorkPermitService } from '../services/workpermit.service';


@Component({
  selector: 'app-workpermit-edit',
  templateUrl: './workpermit-edit.page.html',
  styleUrls: ['./workpermit-edit.page.scss'],
})
export class WorkpermitEditPage implements OnInit {

  // tslint:disable-next-line:variable-name
  _id: number;
  data: Workpermit;

  constructor(
      public activatedRoute: ActivatedRoute,
      public router: Router,
      public apiService: WorkPermitService
  ) {
    this.data = new Workpermit();
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
      this.router.navigate(['workpermitlist']);
    });
  }

}

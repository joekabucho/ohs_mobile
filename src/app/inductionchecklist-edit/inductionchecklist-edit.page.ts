import { Component, OnInit } from '@angular/core';
import { Inductionchecklist } from '../models/inductionchecklist';
import { ActivatedRoute, Router } from '@angular/router';
import { InductionchecklistService } from '../services/inductionchecklist.service';

@Component({
  selector: 'app-inductionchecklist-edit',
  templateUrl: './inductionchecklist-edit.page.html',
  styleUrls: ['./inductionchecklist-edit.page.scss'],
})
export class InductionchecklistEditPage implements OnInit {

  // tslint:disable-next-line:variable-name
  _id: number;
  data: Inductionchecklist;

  constructor(
      public activatedRoute: ActivatedRoute,
      public router: Router,
      public apiService: InductionchecklistService
  ) {
    this.data = new Inductionchecklist();
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
      this.router.navigate(['inductionlist']);
    });
  }

}

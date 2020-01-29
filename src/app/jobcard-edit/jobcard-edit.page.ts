import { Component, OnInit } from '@angular/core';
import { Jobcards } from '../models/jobcards';
import { ActivatedRoute, Router } from '@angular/router';
import { JobcardService } from '../services/jobcard.service';


@Component({
  selector: 'app-jobcard-edit',
  templateUrl: './jobcard-edit.page.html',
  styleUrls: ['./jobcard-edit.page.scss'],
})
export class JobcardEditPage implements OnInit {

  // tslint:disable-next-line:variable-name
  _id: number;
  data: Jobcards;

  constructor(
      public activatedRoute: ActivatedRoute,
      public router: Router,
      public apiService: JobcardService
  ) {
    this.data = new Jobcards();
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
      this.router.navigate(['jobcardlist']);
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { Workpermit } from '../models/workpermit';
import { WorkPermitService } from '../services/workpermit.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-workpermit-create',
  templateUrl: './workpermit-create.page.html',
  styleUrls: ['./workpermit-create.page.scss'],
})
export class WorkpermitCreatePage implements OnInit {

  data: Workpermit
 
  constructor(
    public apiService: WorkPermitService,
    public router: Router
  ) {
    this.data = new Workpermit();
  }
 
  ngOnInit() {
  }
 
  submitForm() {
    this.apiService.createItem(this.data).subscribe((response) => {
      this.router.navigate(['workpermitlist']);
    });
 
  }
 
}

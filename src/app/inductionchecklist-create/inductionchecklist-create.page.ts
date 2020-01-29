import { Component, OnInit } from '@angular/core';
import { Inductionchecklist } from '../models/inductionchecklist';
import { InductionchecklistService } from '../services/inductionchecklist.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inductionchecklist-create',
  templateUrl: './inductionchecklist-create.page.html',
  styleUrls: ['./inductionchecklist-create.page.scss'],
})
export class InductionchecklistCreatePage implements OnInit {
  data: Inductionchecklist;
 
  constructor(
    public apiService: InductionchecklistService,
    public router: Router
  ) {
    this.data = new Inductionchecklist();
  }
 
  ngOnInit() {
  }
 
  submitForm() {
    this.apiService.createItem(this.data).subscribe((response) => {
      this.router.navigate(['inductionlist']);
    });
 
  }
 
}

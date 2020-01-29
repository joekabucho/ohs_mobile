import { Component, OnInit } from '@angular/core';
import { Toolboxtalks } from '../models/toolboxtalks';
import { ToolboxTalkService } from '../services/toolboxtalks.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolboxtalks-create',
  templateUrl: './toolboxtalks-create.page.html',
  styleUrls: ['./toolboxtalks-create.page.scss'],
})
export class ToolboxtalksCreatePage implements OnInit {

  data: Toolboxtalks
 
  constructor(
    public apiService: ToolboxTalkService,
    public router: Router
  ) {
    this.data = new Toolboxtalks();
  }
 
  ngOnInit() {
  }
 
  submitForm() {
    this.apiService.createItem(this.data).subscribe((response) => {
      this.router.navigate(['toolboxtalkslist']);
    });
 
  }
 
}

import { Component, OnInit } from '@angular/core';
import { Toolboxtalks } from '../../models/tooboxtalks';
import { ToolboxTalkService } from '../../services/toolboxtalks.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbox-create',
  templateUrl: './toolbox-create.page.html',
  styleUrls: ['./toolbox-create.page.scss'],
})
export class ToolboxCreatePage implements OnInit {

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
      this.router.navigate(['home-results']);
    });
 
  }
 
}

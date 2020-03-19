
import { Component, OnInit } from '@angular/core';
import { Incident } from '../../models/incident';
import { IncidentService } from '../../services/incidents.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-incident-create',
  templateUrl: './incident-create.page.html',
  styleUrls: ['./incident-create.page.scss'],
})
export class IncidentCreatePage implements OnInit {
  data: Incident;
 
  constructor(
    public apiService: IncidentService,
    public router: Router
  ) {
    this.data = new Incident();
  }
 
  ngOnInit() {
  }
 
  submitForm() {
    this.apiService.createItem(this.data).subscribe((response) => {
      this.router.navigate(['home-results']);
    });
 
  }
 
}


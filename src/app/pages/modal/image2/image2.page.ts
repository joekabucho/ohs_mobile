import { Component, Input, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { DomSanitizer } from '@angular/platform-browser';
import { JobcardService } from '../../../services/jobcard.service';

@Component({
  selector: 'app-image2',
  templateUrl: './image2.page.html',
  styleUrls: ['./image2.page.scss'],
})
export class Image2Page implements OnInit {
  @Input() value: any;
  public image: any;
  jobcardData: any;

  constructor(    private nav: NavController,
    private modalCtrl: ModalController,
    private sanitizer: DomSanitizer,
      public apiService: JobcardService
  ) {
    this.jobcardData = [];
  }

  ngOnInit() {
    this.getAlljobcards();
  }
  closeModal() {
    this.modalCtrl.dismiss();
  }

  getAlljobcards() {
    // Get saved list of students
    this.apiService.getList().subscribe(response => {
      console.log(response);
      this.jobcardData = response;
    });
  }


  delete(item) {
    // Delete item in Student data
    this.apiService.deleteItem(item._id).subscribe(Response => {
      // Update list after delete is successful
      this.getAlljobcards();
    });
  }

}

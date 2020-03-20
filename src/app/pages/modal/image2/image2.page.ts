import { Component, Input, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { DomSanitizer } from '@angular/platform-browser';
import { JobcardService } from '../../../services/jobcard.service';
import { LoadingController } from '@ionic/angular';


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
      public apiService: JobcardService,
      public loadingController: LoadingController,
      
  ) {
    this.jobcardData = [];
  }

  ngOnInit() {
    this.getAlljobcards();
  }
  closeModal() {
    this.modalCtrl.dismiss();
  }

  async getAlljobcards() {
    // Get saved list of students
    const loading = await this.loadingController.create({
      message: 'Loading'

    });
    this.apiService.getList().subscribe(response => {
      console.log(response);
      this.jobcardData = response;
      loading.dismiss();
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

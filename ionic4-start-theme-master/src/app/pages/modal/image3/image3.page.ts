import { Component, Input, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { DomSanitizer } from '@angular/platform-browser';
import { InductionchecklistService } from '../../../services/inductionchecklist.service';


@Component({
  selector: 'app-image3',
  templateUrl: './image3.page.html',
  styleUrls: ['./image3.page.scss'],
})
export class Image3Page implements OnInit {
  @Input() value: any;
  public image: any;
  inductionData: any;

  constructor(    private nav: NavController,
    private modalCtrl: ModalController,
    private sanitizer: DomSanitizer,
      public apiService: InductionchecklistService
  ) {
    this.inductionData = [];
  }

  ngOnInit() {
    this.getAllChecklists();
  }
  closeModal() {
    this.modalCtrl.dismiss();
  }

  getAllChecklists() {
    // Get saved list of students
    this.apiService.getList().subscribe(response => {
      console.log(response);
      this.inductionData = response;
    });
  }


  delete(item) {
    // Delete item in Student data
    this.apiService.deleteItem(item._id).subscribe(Response => {
      // Update list after delete is successful
      this.getAllChecklists();
    });
  }

}

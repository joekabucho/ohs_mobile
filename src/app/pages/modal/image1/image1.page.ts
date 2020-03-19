import { Component, Input, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { DomSanitizer } from '@angular/platform-browser';
import { ToolboxTalkService } from '../../../services/toolboxtalks.service';

@Component({
  selector: 'app-image1',
  templateUrl: './image1.page.html',
  styleUrls: ['./image1.page.scss'],
})
export class Image1Page implements OnInit {
  @Input() value: any;
  public image: any;
  toolboxData: any;

  constructor(    private nav: NavController,
    private modalCtrl: ModalController,
    private sanitizer: DomSanitizer,
      public apiService: ToolboxTalkService
  ) {
    this.toolboxData = [];
  }

  ngOnInit() {
    this.getAlltoolbox();
  }
  closeModal() {
    this.modalCtrl.dismiss();
  }

  getAlltoolbox() {
    // Get saved list of students
    this.apiService.getList().subscribe(response => {
      console.log(response);
      this.toolboxData = response;
    });
  }


  delete(item) {
    // Delete item in Student data
    this.apiService.deleteItem(item._id).subscribe(Response => {
      // Update list after delete is successful
      this.getAlltoolbox();
    });
  }

}

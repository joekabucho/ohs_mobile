import { Component, Input, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { DomSanitizer } from '@angular/platform-browser';
import { WorkPermitService } from '../../../services/workpermits.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.page.html',
  styleUrls: ['./image.page.scss'],
})
export class ImagePage implements OnInit {
  workpermitData: any;
  @Input() value: any;
  public image: any;

  constructor(
    private nav: NavController,
    private modalCtrl: ModalController,
    private sanitizer: DomSanitizer,
    public apiService: WorkPermitService
  ) {
    this.workpermitData = [];
  }

  ngOnInit() {
    this.image = this.sanitizer.bypassSecurityTrustStyle(this.value);
    this.getAllworkpermits();
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }
  getAllworkpermits() {
    // Get saved list of students
    this.apiService.getList().subscribe(response => {
        console.log(response);
        this.workpermitData = response;
    });
}


delete(item) {
    // Delete item in Student data
    this.apiService.deleteItem(item._id).subscribe(Response => {
        // Update list after delete is successful
        this.getAllworkpermits();
    });
}

}

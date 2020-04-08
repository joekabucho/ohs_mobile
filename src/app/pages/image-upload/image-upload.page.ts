import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {File, IWriteOptions, FileEntry} from '@ionic-native/file/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import {UploadService} from '../../services/upload.service';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.page.html',
  styleUrls: ['./image-upload.page.scss'],
})
export class ImageUploadPage implements OnInit, AfterViewInit {
  options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  };
  constructor(private file: File, private uploadService: UploadService, private camera: Camera) { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
  }

  readFile(file: any) {
    const reader = new FileReader();
    reader.onloadend = () => {
      const imgBlob = new Blob([reader.result], {
        type: file.type
      });
      const formData = new FormData();
      formData.append('name', 'Hello');
      formData.append('file', imgBlob, file.name);
      this.uploadService.uploadFile(formData).subscribe(dataRes => {
        console.log(dataRes);
      });
    };
    reader.readAsArrayBuffer(file);
  }
  takePicture() {
    this.camera.getPicture(this.options).then((imageData) => {
      this.file.resolveLocalFilesystemUrl(imageData).then((entry: FileEntry) => {
        entry.file(file => {
          console.log(file);
          this.readFile(file);
        });
      });
    }, (err) => {
      alert("unable to take image try again later");
    });
  }

}

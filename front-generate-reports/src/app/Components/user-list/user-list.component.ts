import { Component, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {QrScannerComponent} from 'angular2-qrscanner';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  display: String = "none"
  @ViewChild(QrScannerComponent, { static: true })
  qrScannerComponent!: QrScannerComponent;
  activeUser: String = 'true'
  showScanner: Boolean = false
  QRResult: any = ''

  constructor(
    private router: Router  ) { }

  ngOnInit(): void {
  }

  goToLink (userId: any) {
    this.router.navigate(['user-info', 'list-detail', userId ]);
  }

  goToGenerateEmail (userId: any) {
    this.router.navigate(['user-info', 'activate-user', userId ]);
  }

  showActiveUser (active: String) {
    this.activeUser = active
  }

  async openModal(displayButton: String) {
    await this.openQRCamera()
    this.display = displayButton
  }

  openQRCamera() {
    this.showScanner = true
    this.qrScannerComponent.getMediaDevices().then(devices => {
      const videoDevices: MediaDeviceInfo[] = [];
      for (const device of devices) {
          if (device.kind.toString() === 'videoinput') {
              videoDevices.push(device);
          }
      }
      if (videoDevices.length > 0){
        let choosenDev;
        for (const dev of videoDevices){
          if (dev.label.includes('front')){
            choosenDev = dev;
            break;
          }
        }
            if (choosenDev) {
                this.qrScannerComponent.chooseCamera.next(choosenDev);
            } else {
                this.qrScannerComponent.chooseCamera.next(videoDevices[0]);
            }
        }
    })

    this.qrScannerComponent.capturedQr.subscribe(result => {
      this.QRResult = result
      this.goToLink(result)
    })
  }


}

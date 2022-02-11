import { Component, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {QrScannerComponent} from 'angular2-qrscanner';
import * as XLSX from 'xlsx';

// declaracion de array para lectura de excel
type AOA= any [][] ;

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

  //inicio de array para el archivo excel
  data: AOA = [
    [1, 2],
    [3, 4],
  ]; 
  wopts: XLSX.WritingOptions = { bookType: 'xlsx', type: 'array' };
  fileName: string = 'SheetJS.xlsx';


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

  //codigo para lectura de archivo en formato excel o csv
  onFileChange(evt:any){
    
    //coneccion al lector de archivos

    const target: DataTransfer= <DataTransfer>(evt.target);

    if(target.files.length !== 1) throw new Error('No se pueden usar multiples archivos');
    const reader: FileReader = new FileReader();

  reader.onload=(e:any)=>{
    //lee el libro de trabajo
    const bstr:string=e.target.result;
    const wb : XLSX.WorkBook=XLSX.read(bstr,{type:'binary'});
    //toma la primera hoja
    const wsname:string=wb.SheetNames[0];
    const ws:XLSX.WorkSheet=wb.Sheets[wsname];
    console.log(ws);
    //guarda los datos
    this.data=<AOA>(XLSX.utils.sheet_to_json(ws,{header:1}));
    console.log(this.data);
  };
    reader.readAsBinaryString(target.files[0]);
    
  }


}

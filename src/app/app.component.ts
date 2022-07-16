import { HttpClient } from '@angular/common/http';
import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { DuAn } from './du-an';
import { DuLieuService } from './du-lieu.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor( 
    // private DuanService: DuanService
    private router:Router,
    private d:DuLieuService,
    private auth:AuthService,
  ) { }
  listDuAn:any;
  listTask:any;
  listNhanVien:any;
  // chucNang:string='';
  // ghiNhanCN(cn:string=''): void{
  // this.chucNang = cn;
  // if (this.chucNang!='ct') this.spDangXem=null;
  // }
  // spDangXem:any=null;
  // ganSP(sp:DuAn){
  //   this.spDangXem=sp;
  //   this.chucNang='ct';
  // }
  ngOnInit(): void {
    // this.listDuan=this.DuanService.getDuAn();
    this.listDuAn = this.d.getDuAn().subscribe ( 
      data => this.listDuAn = data
    );
    this.listTask = this.d.getTask().subscribe ( 
      data => this.listTask = data
    );
    this.listNhanVien = this.d.getNhanVien().subscribe ( 
      data => this.listNhanVien = data
    );


    this.d.getDuAn().subscribe((data: any) => {
      data.forEach((_item: any) => {
          this.totalPrice = this.totalPrice + parseInt(_item.tien);
      });
      this.totalPrice = this.nFormatter(this.totalPrice);
  });


  }

  nFormatter(num: number) {
    if (num >= 1000000000) {
        return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + ' Tỷ';
    }
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1).replace(/\.0$/, '') + ' Triệu';
    }
    if (num >= 1000) {
        return (num / 1000).toFixed(1).replace(/\.0$/, '') + ' Nghìn';
    }
    return num;
  }

@Input() totalPrice: any = 0;
thoat(){ 
  this.auth.thoat();
  this.router.navigateByUrl('/admin/dangnhap');
}
daDangNhap() { return this.auth.daDangNhap()}
  username = localStorage['username'];
}

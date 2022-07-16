import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DuLieuService } from '../du-lieu.service';
import { NhanVien } from '../nhan-vien';
import { NhanvienService } from '../nhanvien.service';

@Component({
  selector: 'app-nhanvien-them',
  templateUrl: './nhanvien-them.component.html',
  styleUrls: ['./nhanvien-them.component.css']
})
export class NhanvienThemComponent implements OnInit {

  constructor(
    // private nhanvienService: NhanvienService,
    private router:Router,
    private d:DuLieuService
  ) { }
    // nv:NhanVien=<NhanVien>{};
    // themNV(){
    //   this.nhanvienService.themNhanVien(this.nv);
    //   this.router.navigate(['/admin/nhanvienlist'])
    // }
    
    // listNhanVien:any;
    ngOnInit(): void {
      // this.listNhanVien = this.d.getNhanVien().subscribe ( 
      //   data => this.listNhanVien = data
      // );
    }
    id:string = '';
    ho:string = '';
    ten:string = '';
    ngaysinh:string = '';
    phai:string = '';
    khuvuc:string = '';
    
    nvthem(nv:any){
      var id= nv.id;
      var ho= nv.ho;
      var ten= nv.ten;
      var ngaysinh= nv.ngaysinh;
      var phai= nv.phai;
      var khuvuc= nv.khuvuc;
  
      console.log(ho, ten);
      this.d.themNhanVien(nv).subscribe ( data => alert('Thêm thành công'));
      this.router.navigate(['/admin/nhanvienlist'])
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DuAn } from '../du-an';
import { DuLieuService } from '../du-lieu.service';
import { DuanService } from '../duan.service';
@Component({
  selector: 'app-duan-them',
  templateUrl: './duan-them.component.html',
  styleUrls: ['./duan-them.component.css']
})
export class DuanThemComponent implements OnInit {

  constructor(
    // private DuanService: DuanService,
    private router:Router,
    private d:DuLieuService
  ) { }
    // da:DuAn=<DuAn>{};
    // themSP(id:number=0){
    //   this.DuanService.themSanPham(this.da);
    //   this.router.navigate(['/admin/duanlist'])
    // }
    listDuAn:any;
    listNhanVien:any;
  ngOnInit(): void {
    this.listDuAn = this.d.getDuAn().subscribe ( 
      data => this.listDuAn = data
    );
    this.listNhanVien = this.d.getNhanVien().subscribe ( 
      data => this.listNhanVien = data
    );
  }
  id:string = '';
  tenDuAn:string = '';
  ngayStart:string = '';
  tien:string = '';
  leader:string = '';
  thanhvien:string = '';
  
  dathem(da:any){
   
    console.log(da);
    var id= da.id;
    var tenDuAn= da.tenDuAn;
    var ngayStart= da.ngayStart;
    var tien= da.tien;
    var leader= da.leader;
    var thanhvien= da.thanhvien;

    console.log(tenDuAn, ngayStart);
    this.d.themDuAn(da).subscribe ( data => {
      alert('Thêm thành công')
    });
    this.router.navigate(['/admin/duanlist'])
}
}

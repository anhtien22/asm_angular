import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DuLieuService } from '../du-lieu.service';
import { NhanVien } from '../nhan-vien';
import { NhanvienService } from '../nhanvien.service';
@Component({
  selector: 'app-nhanvien-list',
  templateUrl: './nhanvien-list.component.html',
  styleUrls: ['./nhanvien-list.component.css']
})
export class NhanvienListComponent implements OnInit {
// listNhanVien:NhanVien[] = [];

constructor( 
  // private nhanvienService: NhanvienService
  private router:Router,
  private d:DuLieuService
) { }
listNhanVien:any;
  ngOnInit(): void {
    // this.listNhanVien=this.nhanvienService.getNhanVien();
    this.listNhanVien = this.d.getNhanVien().subscribe ( 
      data => this.listNhanVien = data
    );
  }
  xoaNV(id:number){
    const hoi = confirm("Bạn muốn xóa nó hả??");
    if (hoi == false) {
      return false;
    } else {
      alert("Chúc mừng bạn đã xóa nó thành công!");
      this.d.xoaNhanVien(id).subscribe(data => {
      })
      // this.router.navigate(['/admin/duanlist'])
      return false;
    }
    
  }
searchName:any;
  searchByName(){ 
    console.log(this.searchName);
    this.d.getNameNhanVien(this.searchName).subscribe ( 
      data => this.listNhanVien = data
    );
  }
 
  // xoaNV(id:number=0){
  //   this.nhanvienService.xoaNhanVien(id);
  //   return false;
  // }

}

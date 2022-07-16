import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { DuAn } from '../du-an';
import { DuanService } from '../duan.service';
import { HttpClient } from '@angular/common/http';
import { DuLieuService } from '../du-lieu.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-duan-list',
  templateUrl: './duan-list.component.html',
  styleUrls: ['./duan-list.component.css']
})
export class DuanListComponent implements OnInit {

  constructor( 
    // private DuanService: DuanService
    private router:Router,
    private d:DuLieuService
  ) { }
  // listDuan:DuAn[]=[];
  listDuAn:any;

  ngOnInit(): void {
    // this.listDuan=this.DuanService.getDuAn();
    this.listDuAn = this.d.getDuAn().subscribe ( 
      data => this.listDuAn = data
    );
  }
  xoaDA(id:number){
    const hoi = confirm("Bạn muốn xóa nó hả??");
    if (hoi == false) {
      return false;
    } else {
      alert("Chúc mừng bạn đã xóa nó thành công!");
      this.d.xoaDuAn(id).subscribe(data => {
      })
      this.router.navigate(['/admin/duanlist']);
      return false;
    }
}

  // xoaSP(id:number=0){
  //   this.DuanService.xoaSanPham(id);
  //   return false;
  // }
  
  searchName:any;
  searchByName(){ 
    console.log(this.searchName);
    this.d.getNameDuAn(this.searchName).subscribe ( 
      data => this.listDuAn = data
    );
  }
 
}
// sd router là ghi chú //
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DuLieuService } from '../du-lieu.service';
import { NhanVien } from '../nhan-vien';
import { NhanvienService } from '../nhanvien.service';

@Component({
  selector: 'app-nhanvien-sua',
  templateUrl: './nhanvien-sua.component.html',
  styleUrls: ['./nhanvien-sua.component.css']
})
export class NhanvienSuaComponent implements OnInit {

  constructor(
    // private nhanvienService: NhanvienService,
    private router: Router,
    private ActivatedRoute: ActivatedRoute,
    private d:DuLieuService
  ) { }
    // idNhanVien:number = Number(this.ActivatedRoute.snapshot.params['id']);
    // nv:NhanVien=<NhanVien>{};
  ngOnInit(): void {
    // let kq = this.nhanvienService.getMotNhanVien(this.idNhanVien);
    // this.nv= kq as NhanVien;
    this.loadData();
  }
  loadData(){
    this.nv = this.ActivatedRoute.params.subscribe(data => {
      console.log(data);
      let id =data['id'];
      this.nv = this.d.getMotNhanVien(id).subscribe(data => {
        console.log(data);
        this.nv = data
      })
    })
  }
  @Input() nv:any;
  suaNV(nv:any){
    this.d.suaNhanVien(nv).subscribe( data => { 
      alert('Sửa thành công');
      console.log("Sửa",data);
      this.router.navigate(['/admin/nhanvienlist'])
    });
  }
  // capnhatNV(){
  //   this.nhanvienService.capnhatNhanVien(this.nv);
  //   this.router.navigate(['/admin/nhanvienlist'])
  // }

}

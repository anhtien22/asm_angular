import { Component, OnInit,Input } from '@angular/core';
import { DuAn} from '../du-an';
import { DuanService } from '../duan.service';
import {Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { DuLieuService } from '../du-lieu.service';
@Component({
  selector: 'app-duan-sua',
  templateUrl: './duan-sua.component.html',
  styleUrls: ['./duan-sua.component.css']
})
export class DuanSuaComponent implements OnInit {
  listDuAn:any;
  listNhanVien:any;
  constructor(
    // private DuanService: DuanService,
    private router: Router,
    private ActivatedRoute: ActivatedRoute,
    private d:DuLieuService
  ) { }
    // idDuAn:number = Number(this.ActivatedRoute.snapshot.params['id']);
    // da:DuAn=<DuAn>{};
  ngOnInit(): void {
    this.listDuAn = this.d.getDuAn().subscribe ( 
      data => this.listDuAn = data
    );
    this.listNhanVien = this.d.getNhanVien().subscribe ( 
      data => this.listNhanVien = data
    );
    // let kq = this.d.getMotDuAn(this.idDuAn);
    // this.da = kq as DuAn;
    this.loadData();
  }
  loadData(){
    this.da = this.ActivatedRoute.params.subscribe(data => {
      console.log(data);
      let id = data['id'];
      this.da = this.d.getMotDuAn(id).subscribe(data => {
        console.log(data);
        this.da = data
      })
    })
  }
  @Input() da:any;
  suaDA(da:any){
    this.d.suaDuAn(da).subscribe( data => { 
      alert('Sửa thành công');
      console.log("Sửa",data);
      this.router.navigate(['/admin/duanlist'])
    });
  }
 
  // capnhatSP(){
  //   this.DuanService.capnhatSanPham(this.da);
  //   this.router.navigate(['/admin/duanlist'])
  // }
  
}

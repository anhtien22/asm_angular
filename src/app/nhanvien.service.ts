import { Injectable } from '@angular/core';
import { NhanVien } from './nhan-vien';

@Injectable({
  providedIn: 'root'
})
export class NhanvienService {
  listNhanVien:NhanVien[] = [
    {
       id:1,
       ho:'Phạm',
       ten: 'Tiến',
       ngaysinh:'27/07/2002',
       phai: true,
       khuvuc:1
    }
  ]
  constructor() { }

  getNhanVien(){
    return this.listNhanVien;
  }
  getMotNhanVien(id:number=0){
    return this.listNhanVien.find(nv => nv.id==id);
  }
  themNhanVien(nv:NhanVien=<NhanVien>{}){
    this.listNhanVien.push(nv);
  }
  capnhatNhanVien(nv:NhanVien=<NhanVien>{}){
    let index = this.listNhanVien.findIndex(n => n.id==nv.id);
    this.listNhanVien[index]= nv;
  }
  xoaNhanVien(id:number=0){
    let index = this.listNhanVien.findIndex(n => n.id==id)
    this.listNhanVien.splice(index);
  }
}

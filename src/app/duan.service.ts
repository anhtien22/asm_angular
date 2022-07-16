import { Injectable } from '@angular/core';
import { DuAn } from './du-an';
// import {HttpClient, HttpHeaders} from '@angular/common/http';
// import {Observable,of} from 'rxjs';
// const httpOptions ={
//   headers:new HttpHeaders({'Content-Type':'Application/json'})
// }
// const apiUrl = 'https://5f0c7a5911b7f60016055e6c.mockapi.io/Api/ahihi';

@Injectable({
  providedIn: 'root'
})
export class DuanService {
  listDuAn:DuAn[]=[
    {
      id:1,
      tenDuAn:'abc',
      ngayStart: '27/7/2002',
      tien:2000000,
      leader:1,
      thanhvien:[1,3,4]
    },
    {
      id:2,
      tenDuAn:'abc1',
      ngayStart: '27/7/2002',
      tien:5000,
      leader:1,
      thanhvien:[1,3,4]
    },
    {
      id:3,
      tenDuAn:'abc',
      ngayStart: '27/7/2002',
      tien:123123,
      leader:5,
      thanhvien:[1,3,4]
    },
    {
      id:4,
      tenDuAn:'abc5123',
      ngayStart: '27/7/2002',
      tien:6756,
      leader:2,
      thanhvien:[1,3,4]
    },
    ];
  constructor(
    // private httpClient:HttpClient
  ) { }
  // getAll():Observable<DuAn[]>{
  //   return this.httpClient.get<DuAn[]>(apiUrl).pipe(
  //   )
  // }
  getDuAn(){
    return this.listDuAn;
  }

  getMotDuAn(id:number=0){
    return this.listDuAn.find(sp => sp.id==id);
  }
  themSanPham(da:DuAn=<DuAn>{}){
    this.listDuAn.push(da);

  }
  capnhatSanPham(da:DuAn=<DuAn>{}){
    let index = this.listDuAn.findIndex(d => d.id==da.id);
    this.listDuAn[index]= da;
  }
  xoaSanPham(id:number=0){
    let index = this.listDuAn.findIndex(d => d.id==id)
    this.listDuAn.splice(index);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DuLieuService {

  constructor(private h:HttpClient) { }
  // DỰ ÁN
  getDuAn(){
    return this.h.get('http://localhost:7000/listDuAn');
  }
  getNameDuAn(nameSearch:string){
    return this.h.get('http://localhost:7000/listDuAn/' + '?tenDuAn_like=' + nameSearch);
  }
  themDuAn(da:any){
    return this.h.post('http://localhost:7000/listDuAn',da);
  }
  getMotDuAn(id:number){
    return this.h.get('http://localhost:7000/listDuAn/' + id);
  }
  xoaDuAn(id:number){
    return this.h.delete('http://localhost:7000/listDuAn/'+ id)
  }
  suaDuAn(da:any){
    console.log(da);
    return this.h.put('http://localhost:7000/listDuAn/' + da.id ,da);
  }
  
  // NHÂN VIÊN
  getNhanVien(){
    return this.h.get('http://localhost:7000/listNhanVien');
  }
  getNameNhanVien(nameSearch:string){
    return this.h.get('http://localhost:7000/listNhanVien/' + '?ten_like=' + nameSearch);
  }
  themNhanVien(da:any){
    return this.h.post('http://localhost:7000/listNhanVien',da);
  }
  getMotNhanVien(id:number){
    return this.h.get('http://localhost:7000/listNhanVien/' + id);
  }
  xoaNhanVien(id:number){
    return this.h.delete('http://localhost:7000/listNhanVien/'+ id)
  }
  suaNhanVien(da:any){
    return this.h.put('http://localhost:7000/listNhanVien/' + da.id ,da);
  }
  // TASK
  getTask(){
    return this.h.get('http://localhost:7000/listTask');
  }
  getNameTask(nameSearch:string){
    return this.h.get('http://localhost:7000/listTask/' + '?tenTask_like=' + nameSearch);
  }
  themTask(da:any){
    return this.h.post('http://localhost:7000/listTask',da);
  }
  getMotTask(id:number){
    return this.h.get('http://localhost:7000/listTask/' + id);
  }
  xoaTask(id:number){
    return this.h.delete('http://localhost:7000/listTask/'+ id)
  }
  suaTask(da:any){
    return this.h.put('http://localhost:7000/listTask/' + da.id ,da);
  }
  // Đăng nhập
  // dangNhap(us:any){
  //   return this.h.post('http://localhost:7000/user',us);
  // }




  getData() {
    return this.h.get('http://localhost:7000/user');
}

getOne(id: number) {
    return this.h.get(`http://localhost:7000/user/${id}`);
}

addUser(item: any) {
    const params = new HttpParams({
        fromObject: { ...item },
    });

    let headers = new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
    });

    return this.h.post('http://localhost:7000/user', params, { headers }).subscribe((data) => {
        // console.log(data);
    });
}

editUser(item: any) {
    const params = new HttpParams({
        fromObject: { ...item },
    });

    let headers = new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
    });

    return this.h
        .put(`http://localhost:7000/user/${item.id}`, params, { headers })
        .subscribe((data) => {
            // console.log(data);
        });
}

deleteUser(id: number = 0) {
    return this.h.delete(`http://localhost:7000/user/${id}`).subscribe((data) => {
        console.log(data);
    });
}
  
}

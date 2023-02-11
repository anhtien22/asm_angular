import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { DuLieuService } from '../du-lieu.service';
import * as moment  from 'moment';

@Component({
  selector: 'app-dangnhap',
  templateUrl: './dangnhap.component.html',
  styleUrls: ['./dangnhap.component.css']
})
export class DangnhapComponent implements OnInit {

  constructor(
    private auth:AuthService, 
    private d:DuLieuService,
    private router: Router
  ) { }
  // id:string = '';
  // username:string = '';
  // password:string = '';
  // email:string = '';
  ngOnInit(): void {
  }
  // login(us:any){
  //   var id= us.id;
  //   var username= us.username;
  //   var password= us.password;
  //   var email= us.email;
  //   this.d.dangNhap(us).subscribe ( data => {
  //     alert('Thêm thành công')
  //     console.log(data); 
  //   });
  // }
  xulyDN(data:any){    
    console.log(data, data.username , data.password);
    this.auth.login( data.username, data.password).subscribe( 
      res =>{          
          var d = JSON.parse(res);
          console.log("Đăng nhập thành công ", res);          
          const expiresAt = moment().add(d.expiresIn, 'second');
           localStorage.setItem('id_token', d.idToken);
           localStorage.setItem('username', data.username);
           localStorage.setItem('userid', d.userId)
           localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
           this.router.navigateByUrl('/admin/home');
      },
      error => {
        console.log('Bạn không có quyền xem trang này', error);
        this.router.navigateByUrl('/admin/dangnhap');
      }
    )
   } //xulyDN
}

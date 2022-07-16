import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DuLieuService } from '../du-lieu.service';

@Component({
  selector: 'app-dangky',
  templateUrl: './dangky.component.html',
  styleUrls: ['./dangky.component.css']
})
export class DangkyComponent implements OnInit {
  constructor(
    private d:DuLieuService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  id:any
  username: any;
  // email: any;
  password: any = '';
  // password2: any = '';
  // wrongPass: boolean = false;
  // truePass: boolean = false;
  
  // checkPass() {
  //     if (
  //         this.password != '' &&
  //         // this.password2 != '' &&
  //         // this.password == this.password2
  //     ) {
  //         this.wrongPass = false;
  //         this.truePass = true;
  //     } else this.wrongPass = true;
  // }
  
  xulyDN(dataForm: any) {
      this.d.addUser(dataForm);
      alert('Đăng ký thành công');
      this.router.navigate(['/admin/dangnhap']);
  }
}

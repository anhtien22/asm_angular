import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DuLieuService } from '../du-lieu.service';
import { DuanService } from '../duan.service';
import { DuAn } from './../du-an';

@Component({
  selector: 'app-duanchitiet',
  templateUrl: './duanchitiet.component.html',
  styleUrls: ['./duanchitiet.component.css']
})
export class DuanchitietComponent implements OnInit {
 
  constructor(
    private route:ActivatedRoute,
    private DuanService:DuanService,
    private ActivatedRoute: ActivatedRoute,
    private d:DuLieuService

  ) { }
  // idDuAn:number = Number(this.route.snapshot.params['id']);
  //   da=<DuAn>{}; //obj rỗng theo interface duan
  ngOnInit(): void {
    // if (this.idDuAn<0){
    //   return;
    // }
    // let kq=this.DuanService.getMotDuAn(this.idDuAn);
    // if (kq==null){
    //   this.da= {} as DuAn;
    // } else {
    //   this.da= kq as DuAn;
    // }
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
}

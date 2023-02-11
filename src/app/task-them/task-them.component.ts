import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DuLieuService } from '../du-lieu.service';
import { Task } from '../task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-them',
  templateUrl: './task-them.component.html',
  styleUrls: ['./task-them.component.css']
})
export class TaskThemComponent implements OnInit {

  constructor(
    // private taskService: TaskService,
    private d:DuLieuService,
    private router:Router
  ) { }
    // ta:Task=<Task>{};
    // themTask(){
    //   this.taskService.themTask(this.ta);
    //   this.router.navigate(['/admin/tasklist'])
    // }
    listDuAn:any;
    listNhanVien:any;
  ngOnInit(): void {
    this.listDuAn = this.d.getDuAn().subscribe ( 
      data => this.listDuAn = data
    );
    this.listNhanVien = this.d.getNhanVien().subscribe ( 
      data => this.listNhanVien = data
    );
  }
  id:string = '';
  tenTask:string = '';
  duAnID:string = '';
  nhanvienID:string = '';
  priority:string = '';
  status:string = '';
  moTa:string = '';
  themTASK(ta:any){
   
    console.log(ta);
    var id= ta.id;
    var tenTask= ta.tenTask;
    var duAnID= ta.duAnID;
    var nhanvienID= ta.nhanvienID;
    var priority= ta.priority;
    var status= ta.status;
    var moTa= ta.moTa;

    console.log(tenTask, duAnID);
    this.d.themTask(ta).subscribe ( data => {
      alert('Thêm thành công')
      console.log(data); 
    });
    this.router.navigate(['/admin/tasklist'])
}
}

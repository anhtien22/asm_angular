import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DuLieuService } from '../du-lieu.service';
import { Task } from '../task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-sua',
  templateUrl: './task-sua.component.html',
  styleUrls: ['./task-sua.component.css']
})
export class TaskSuaComponent implements OnInit {
  listDuAn:any;
  listNhanVien:any;
  constructor(
    // private taskService: TaskService,
    private router: Router,
    private ActivatedRoute: ActivatedRoute,
    private d:DuLieuService
  ) { }
    // idTask:number = Number(this.ActivatedRoute.snapshot.params['id']);
    // ta:Task=<Task>{};
  ngOnInit(): void {
    this.listDuAn = this.d.getDuAn().subscribe ( 
      data => this.listDuAn = data
    );
    this.listNhanVien = this.d.getNhanVien().subscribe ( 
      data => this.listNhanVien = data
    );
    // let kq = this.taskService.getMotTask(this.idTask);
    // this.ta= kq as Task;
    this.loadData();
  }
  loadData(){
    this.ta = this.ActivatedRoute.params.subscribe(data => {
      console.log(data);
      let id = data['id'];
      this.ta = this.d.getMotTask(id).subscribe(data => {
        console.log(data);
        this.ta = data
      })
    })
  }
  @Input() ta:any;
  suaTA(ta:any){
    this.d.suaTask(ta).subscribe( data => { 
      alert('Sửa thành công');
      console.log("Sửa",data);
      this.router.navigate(['/admin/tasklist'])
    });
  }
  // capnhatTask(){
  //   this.taskService.capnhatTask(this.ta);
  //   this.router.navigate(['/admin/tasklist'])
  // }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DuLieuService } from '../du-lieu.service';
import { Task } from '../task';
import { TaskService } from './../task.service';
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  // listTask:Task[] = []

  constructor( 
    // private taskService: TaskService,
    private router:Router,
    private d:DuLieuService
  ) { }
  listTask:any;
  ngOnInit(): void {
    // this.listTask=this.taskService.getTask();
    this.listTask = this.d.getTask().subscribe ( 
      data => this.listTask = data
    );
  }
  // xoaTASK(id:number=0){
  //   this.taskService.xoaTask(id);
  //   return false;
  // }
  xoaTASK(id:number){
    const hoi = confirm("Bạn muốn xóa nó hả??");
    if (hoi == false) {
      return false;
    } else {
      alert("Chúc mừng bạn đã xóa nó thành công!");
      this.d.xoaTask(id).subscribe(data => {
      })
      this.router.navigate(['/admin/duanlist']);
      return false;
    }
}
searchName:any;
  searchByName(){ 
    console.log(this.searchName);
    this.d.getNameTask(this.searchName).subscribe ( 
      data => this.listTask = data
    );
  }
}

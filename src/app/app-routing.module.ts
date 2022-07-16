import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { DuanListComponent } from './duan-list/duan-list.component';
import { DuanThemComponent } from './duan-them/duan-them.component';
import { DuanSuaComponent } from './duan-sua/duan-sua.component';
import { DuanchitietComponent } from './duanchitiet/duanchitiet.component';

import { NhanvienListComponent } from './nhanvien-list/nhanvien-list.component';
import { NhanvienThemComponent } from './nhanvien-them/nhanvien-them.component';
import { NhanvienSuaComponent } from './nhanvien-sua/nhanvien-sua.component';

import { TaskListComponent } from './task-list/task-list.component';
import { TaskThemComponent } from './task-them/task-them.component';
import { TaskSuaComponent } from './task-sua/task-sua.component';

import { DangnhapComponent } from './dangnhap/dangnhap.component';
import { DangkyComponent } from './dangky/dangky.component';
import { DoipassComponent } from './doipass/doipass.component';
import { BaoveGuard } from './baove.guard';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'admin/home', component: HomeComponent},

  {path: 'admin/duanlist', component: DuanListComponent,canActivate:[BaoveGuard],},
  {path: 'admin/duanthem', component: DuanThemComponent, canActivate:[BaoveGuard],
 },
  {path: 'admin/duansua/:id', component: DuanSuaComponent, canActivate:[BaoveGuard],
  },
  {path: 'admin/duanchitiet/:id', component: DuanchitietComponent, canActivate:[BaoveGuard],
  },

  {path: 'admin/nhanvienlist', component: NhanvienListComponent, canActivate:[BaoveGuard],
  },
  {path: 'admin/nhanvienthem', component: NhanvienThemComponent, canActivate:[BaoveGuard],
 },
  {path: 'admin/nhanviensua/:id', component: NhanvienSuaComponent, canActivate:[BaoveGuard],
 },

  {path: 'admin/tasklist', component: TaskListComponent, canActivate:[BaoveGuard],
 },
  {path: 'admin/taskthem', component: TaskThemComponent, canActivate:[BaoveGuard],
  },
  {path: 'admin/tasksua/:id', component: TaskSuaComponent,canActivate:[BaoveGuard], 
 },
  
  {path: 'admin/dangnhap', component: DangnhapComponent},
  {path: 'admin/dangky', component: DangkyComponent},
  { path:'admin/doipass', 
    component:DoipassComponent, 
    canActivate:[BaoveGuard], },  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

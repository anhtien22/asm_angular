import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DuanListComponent } from './duan-list/duan-list.component';
import { DuanThemComponent } from './duan-them/duan-them.component';
import { DuanSuaComponent } from './duan-sua/duan-sua.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskThemComponent } from './task-them/task-them.component';
import { TaskSuaComponent } from './task-sua/task-sua.component';
import { NhanvienListComponent } from './nhanvien-list/nhanvien-list.component';
import { NhanvienThemComponent } from './nhanvien-them/nhanvien-them.component';
import { NhanvienSuaComponent } from './nhanvien-sua/nhanvien-sua.component';
import { DuanchitietComponent } from './duanchitiet/duanchitiet.component';
import { TabbartopComponent } from './tabbartop/tabbartop.component';
import { HomeComponent } from './home/home.component';

import { DangkyComponent } from './dangky/dangky.component';
import { DangnhapComponent } from './dangnhap/dangnhap.component';
import { DoipassComponent } from './doipass/doipass.component';
import { HttpClientModule} from'@angular/common/http';
import { Moment } from 'moment';
@NgModule({
  declarations: [
    AppComponent,
    DuanListComponent,
    DuanThemComponent,
    DuanSuaComponent,
    TaskListComponent,
    TaskThemComponent,
    TaskSuaComponent,
    NhanvienListComponent,
    NhanvienThemComponent,
    NhanvienSuaComponent,
    DuanchitietComponent,
    TabbartopComponent,
    HomeComponent,
    DangnhapComponent,
    DangkyComponent,
    DoipassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NhanvienSuaComponent } from './nhanvien-sua.component';

describe('NhanvienSuaComponent', () => {
  let component: NhanvienSuaComponent;
  let fixture: ComponentFixture<NhanvienSuaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NhanvienSuaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NhanvienSuaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

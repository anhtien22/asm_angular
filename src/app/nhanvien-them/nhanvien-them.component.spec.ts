import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NhanvienThemComponent } from './nhanvien-them.component';

describe('NhanvienThemComponent', () => {
  let component: NhanvienThemComponent;
  let fixture: ComponentFixture<NhanvienThemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NhanvienThemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NhanvienThemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

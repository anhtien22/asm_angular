import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuanchitietComponent } from './duanchitiet.component';

describe('DuanchitietComponent', () => {
  let component: DuanchitietComponent;
  let fixture: ComponentFixture<DuanchitietComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DuanchitietComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DuanchitietComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

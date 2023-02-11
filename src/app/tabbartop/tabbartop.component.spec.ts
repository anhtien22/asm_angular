import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabbartopComponent } from './tabbartop.component';

describe('TabbartopComponent', () => {
  let component: TabbartopComponent;
  let fixture: ComponentFixture<TabbartopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabbartopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabbartopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

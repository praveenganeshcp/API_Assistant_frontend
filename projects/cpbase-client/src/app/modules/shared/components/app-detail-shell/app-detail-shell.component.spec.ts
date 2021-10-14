import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDetailShellComponent } from './app-detail-shell.component';

describe('AppDetailShellComponent', () => {
  let component: AppDetailShellComponent;
  let fixture: ComponentFixture<AppDetailShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppDetailShellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppDetailShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileObjectDetailComponent } from './file-object-detail.component';

describe('FileObjectDetailComponent', () => {
  let component: FileObjectDetailComponent;
  let fixture: ComponentFixture<FileObjectDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileObjectDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileObjectDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

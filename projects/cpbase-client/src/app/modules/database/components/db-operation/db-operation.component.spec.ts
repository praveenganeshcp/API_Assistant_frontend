import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbOperationComponent } from './db-operation.component';

describe('DbOperationComponent', () => {
  let component: DbOperationComponent;
  let fixture: ComponentFixture<DbOperationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbOperationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

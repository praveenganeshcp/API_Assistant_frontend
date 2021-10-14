import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAccountShellComponent } from './user-account-shell.component';

describe('UserAccountShellComponent', () => {
  let component: UserAccountShellComponent;
  let fixture: ComponentFixture<UserAccountShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAccountShellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAccountShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

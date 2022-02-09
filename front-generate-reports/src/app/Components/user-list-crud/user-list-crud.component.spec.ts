import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListCrudComponent } from './user-list-crud.component';

describe('UserListCrudComponent', () => {
  let component: UserListCrudComponent;
  let fixture: ComponentFixture<UserListCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserListCrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

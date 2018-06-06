import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectStudentListComponent } from './project-student-list.component';

describe('ProjectStudentListComponent', () => {
  let component: ProjectStudentListComponent;
  let fixture: ComponentFixture<ProjectStudentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectStudentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectStudentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

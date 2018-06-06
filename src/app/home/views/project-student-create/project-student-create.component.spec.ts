import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectStudentCreateComponent } from './project-student-create.component';

describe('ProjectStudentCreateComponent', () => {
  let component: ProjectStudentCreateComponent;
  let fixture: ComponentFixture<ProjectStudentCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectStudentCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectStudentCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

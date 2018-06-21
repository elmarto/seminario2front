import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectProfessionalListComponent } from './project-professional-list.component';

describe('ProjectProfessionalListComponent', () => {
  let component: ProjectProfessionalListComponent;
  let fixture: ComponentFixture<ProjectProfessionalListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectProfessionalListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectProfessionalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

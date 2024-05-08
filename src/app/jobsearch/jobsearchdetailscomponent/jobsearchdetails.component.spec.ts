import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsearchdetailsComponent } from './jobsearchdetails.component';

describe('JobsearchdetailsComponent', () => {
  let component: JobsearchdetailsComponent;
  let fixture: ComponentFixture<JobsearchdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobsearchdetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JobsearchdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

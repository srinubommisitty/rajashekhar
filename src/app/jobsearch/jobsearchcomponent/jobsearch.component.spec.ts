import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsearchComponent } from './jobsearch.component';

describe('JobsearchComponent', () => {
  let component: JobsearchComponent;
  let fixture: ComponentFixture<JobsearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobsearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JobsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

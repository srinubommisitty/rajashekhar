import { Component } from '@angular/core';
import { JobsearchService } from '../services/jobsearch.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CompanyDetails } from '../model/CompanyDetails';
import { NgIf } from '@angular/common';



@Component({
  selector: 'app-jobsearchdetails',
  standalone: true,
  imports: [RouterLink,NgIf],
  templateUrl: './jobsearchdetails.component.html',
  styleUrl: './jobsearchdetails.component.css'
})
export class JobsearchdetailsComponent {

  constructor(
    private JobsearchService: JobsearchService,
    private route: ActivatedRoute,
    ){}
    companyDetails: CompanyDetails | undefined;

    ngOnInit(){
      const companyid = this.route.snapshot.paramMap.get('id') || '';
      this.JobsearchService.GetCompanyDetails(companyid)
      .subscribe(data => {
        this.companyDetails = data;
      },)

}
}

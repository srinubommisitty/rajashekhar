import { Component, OnInit } from '@angular/core';
import { JobsearchService } from '../services/jobsearch.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { MatTabsModule } from '@angular/material/tabs';
import { Companys } from '../model/Companys';
import { NgIf, NgFor } from '@angular/common';


@Component({
  selector: 'app-jobsearch',
  standalone: true,
  imports: [CommonModule, RouterLink, MatTabsModule, NgFor, NgIf],
  templateUrl: './jobsearch.component.html',
  styleUrl: './jobsearch.component.css'
})
export class JobsearchComponent implements OnInit {
  companyData: Array<Companys> = [];
  addFav: Array<Companys> = [];
  isShow = false;


  constructor(private service: JobsearchService,
  ) { }

  ngOnInit(): void {
    this.isShow = true;

    this.service.GetDetails().pipe(map(res => {
      this.companyData = res;
      console.log(res);

    })).subscribe();

  }
  AddFavoritems(cmpData: Companys) {
    if (this.addFav.length == 0) {
      this.addFav.push(cmpData);

    }
  else
    {
      let result=this.addFav.filter(item=>item.companyName==cmpData.companyName).length;
      if(result==0){
        this.addFav.push(cmpData);
      }
    }
  }

  DeleteFavoritems(index: number) {

    this.addFav.splice(index, 1);
  }

  Jobtab() {
    this.isShow = true;
  }

  Favoratetab() {
    this.isShow = false;

  }

}
















import { Routes } from '@angular/router';
import { JobsearchComponent } from '../app/jobsearch/jobsearchcomponent/jobsearch.component';
import { JobsearchdetailsComponent } from '../app/jobsearch/jobsearchdetailscomponent/jobsearchdetails.component';


export const routes: Routes = [

    { path: 'Companys/:id', component: JobsearchdetailsComponent},
    { path: 'Companys', component: JobsearchComponent},
    { path: '', component: JobsearchComponent}




];

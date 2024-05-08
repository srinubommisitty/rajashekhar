import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import{CompanyDetails} from '../model/CompanyDetails';
import{Companys} from '../model/Companys'


@Injectable({
  providedIn: 'root'
})

export class JobsearchService {
  constructor (private http:HttpClient) {}
  private url = '/Companys';

  GetDetails():Observable<Companys[]>{
  return this.http.get<Companys[]>(this.url);
  }
  
  GetCompanyDetails(companyid: string):Observable<CompanyDetails>{
    return this.http.get<CompanyDetails>(this.url+ '/'+companyid);
  
  }

}

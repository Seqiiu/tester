import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Dane{
  name:string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  readonly ApiURL="https://appertester.azurewebsites.net/api";

  constructor(private http:HttpClient) { }
  

  getResoultComponent(dane:any):Observable<Dane>{
    return this.http.post<Dane>(this.ApiURL +'/GetPomp',dane);
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WorkingPoint } from "../interface/workingpoint";

@Injectable({
    providedIn: 'root'
  })
  export class WorkingPointService
  {
    private url = "/server/workingPoint";
  
    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json'
      })
    }
  
    constructor(private httpClient:HttpClient) { }
  
    getAllWorkingPoints():Observable<WorkingPoint[]> { return this.httpClient.get<WorkingPoint[]>(this.url+'/find/all'); }
  
    getWorkingPointById(id:any):Observable<WorkingPoint> { return this.httpClient.get<WorkingPoint>(this.url+'/findbyid/'+id);}
  
    getWorkingPointByCnp(cnp:string):Observable<WorkingPoint> { return this.httpClient.get<WorkingPoint>(this.url + '/find/' + cnp); }
  
    addNewWorkingPoint(workingPoint: WorkingPoint):Observable<WorkingPoint>
    {
      console.log(workingPoint);
      return this.httpClient.post<WorkingPoint>(this.url + '/save', JSON.stringify(workingPoint), this.httpOptions);
    }
  
    updateWorkingPoint(id:any, workingPoint:any):Observable<WorkingPoint>{
      return this.httpClient.put<WorkingPoint>(this.url+ '/update/' + id, JSON.stringify(workingPoint),this.httpOptions);
    }
  
    deleteWorkingPoint(id:any):Observable<WorkingPoint> { return this.httpClient.delete<WorkingPoint>(this.url+'/delete/'+id,this.httpOptions); }
  }
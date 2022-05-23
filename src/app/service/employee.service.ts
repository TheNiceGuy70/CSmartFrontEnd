import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from "../interface/employee";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService
{
  private url = "/server/employee/";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  }

  constructor(private httpClient:HttpClient) { }

  getAllEmployees():Observable<Employee[]> { return this.httpClient.get<Employee[]>(this.url+'find/all'); }

  getEmployeeById(id:any):Observable<Employee> { return this.httpClient.get<Employee>(this.url+'findbyid/'+id); }

  getEmployeeByCnp(cnp:string):Observable<Employee> { return this.httpClient.get<Employee>(this.url+'findbycnp/'+cnp); }

  addNewEmployee(employee: Employee):Observable<Employee> { return this.httpClient.post<Employee>(this.url+'save', JSON.stringify(employee), this.httpOptions); }

  updateEmployee(id:any, employee:any):Observable<Employee> { return this.httpClient.put<Employee>(this.url+'update/'+id, JSON.stringify(employee), this.httpOptions); }

  deleteEmployee(id:any):Observable<Employee> { return this.httpClient.delete<Employee>(this.url+'delete/'+id, this.httpOptions); }
}

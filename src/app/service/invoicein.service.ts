import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {InvoiceIn} from "../interface/invoicein";

@Injectable({
  providedIn: 'root'
})
export class InvoiceInService
{
  private url = "/server/invoicein";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  }

  constructor(private httpClient:HttpClient) { }

  getAllInvoiceIns():Observable<InvoiceIn[]> { return this.httpClient.get<InvoiceIn[]>(this.url+'/find/all'); }

  getInvoiceInById(id:any):Observable<InvoiceIn> { return this.httpClient.get<InvoiceIn>(this.url+'/findbyid/'+id); }

  addNewInvoiceIn(invoiceIn: InvoiceIn):Observable<InvoiceIn> { return this.httpClient.post<InvoiceIn>(this.url + '/save', JSON.stringify(invoiceIn), this.httpOptions); }

  deleteInvoiceIn(id:any):Observable<InvoiceIn> { return this.httpClient.delete<InvoiceIn>(this.url+'/delete/'+id,this.httpOptions); }
}

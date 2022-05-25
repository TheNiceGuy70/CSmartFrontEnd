import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Provider} from "../interface/provider";

@Injectable({
  providedIn: 'root'
})
export class ProviderService
{
  private url = "/server/provider";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  }

  constructor(private httpClient:HttpClient) { }

  getAllProviders():Observable<Provider[]> { return this.httpClient.get<Provider[]>(this.url+'/find/all'); }

  getProviderById(id:any):Observable<Provider> { return this.httpClient.get<Provider>(this.url+'/findbyid/'+id);}

  getProviderByCnp(cnp:string):Observable<Provider> { return this.httpClient.get<Provider>(this.url + '/find/' + cnp); }

  addNewProvider(provider: Provider):Observable<Provider>
  {
    console.log(provider);
    return this.httpClient.post<Provider>(this.url + '/save', JSON.stringify(provider), this.httpOptions);
  }

  updateProvider(id:any, provider:any):Observable<Provider>{
    return this.httpClient.put<Provider>(this.url+ '/update/' + id, JSON.stringify(provider),this.httpOptions);
  }

  deleteProvider(id:any):Observable<Provider> { return this.httpClient.delete<Provider>(this.url+'/delete/'+id,this.httpOptions); }
}

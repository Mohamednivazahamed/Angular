import { Injectable } from '@angular/core';
import { Investor} from '../model/Investor';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InvTransaction } from '../model/InvTransaction';
@Injectable({
  providedIn: 'root'
})
export class InvestserviceService {

  constructor(private http:HttpClient) {

  }

getInvestors() :Observable<Investor[]>{
 return this.http.get<Investor[]>("http://localhost:9070/Invest/allinvestors");
}

getTransactions() :Observable<InvTransaction[]>{
  return this.http.get<InvTransaction[]>("http://localhost:9070/Invest/alltransactions");
 }

saveInvestor(investor: Investor) :Observable<Object> {
 return this.http.
 post("http://localhost:9070/Invest/addinvestor",investor);
}

addTransaction(transaction: InvTransaction) :Observable<Object> {
  return this.http.
  post("http://localhost:9070/Invest/addInvTransaction",transaction);
 }

deleteInvestor(investor: Investor) :Observable<Object> {
  return this.http.
  post("http://localhost:9070/Invest/deleteinvestor",investor);
 }


}

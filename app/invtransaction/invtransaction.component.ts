
import { Component } from '@angular/core';
import { InvTransaction } from '../model/InvTransaction';
import { InvestserviceService } from '../service/investservice.service';
@Component({
  selector: 'app-invtransaction',
  templateUrl: './invtransaction.component.html',
  styleUrl: './invtransaction.component.css'
})
export class InvtransactionComponent {
  InvTransactions :InvTransaction[] =[]
  constructor(private service:InvestserviceService)
{

}
ngOnInit(): void{
  console.log("from onInit() ...");
  this.InvTransactions =this.getInvTransactions();
 }
 
getInvTransactions() :any 
{
  this.service.getTransactions().subscribe((InvTransactions) => {
    console.log(this.InvTransactions);
    this.InvTransactions =InvTransactions;
  })
}
}

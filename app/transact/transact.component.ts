import { Component } from '@angular/core';
import { InvTransaction } from '../model/InvTransaction';
import { InvestserviceService } from '../service/investservice.service';


@Component({
  selector: 'app-transact',
  templateUrl: './transact.component.html',
  styleUrl: './transact.component.css'
})
export class TransactComponent {
  onSubmit() {
    this.saveTransaction();
    
    }
    Transaction:InvTransaction = new InvTransaction();
      
      constructor(private investorservice:InvestserviceService) {
    
      }
     
      saveTransaction() :void {
        this.investorservice.addTransaction(this.Transaction).
        subscribe((data) => {
          console.log(data);
        },
        (error)=>console.log(error)
        )
      }
}

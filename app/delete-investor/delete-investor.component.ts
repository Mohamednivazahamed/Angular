import { Component } from '@angular/core';
import { InvestserviceService } from '../service/investservice.service';
import { Investor } from '../model/Investor';

@Component({
  selector: 'app-delete-investor',
  templateUrl: './delete-investor.component.html',
  styleUrl: './delete-investor.component.css'
})
export class DeleteInvestorComponent {
  onSubmit() {
    this.deleteInvestor();
    
    }
    investor:Investor = new Investor();
      
      constructor(private investorservice:InvestserviceService) {
    
      }
     
      deleteInvestor() :void {
        this.investorservice.deleteInvestor(this.investor).
        subscribe((data) => {
          console.log(data);
        },
        (error)=>console.log(error)
        )
      }

}

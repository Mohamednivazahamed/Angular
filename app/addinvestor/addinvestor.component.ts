import { Component } from '@angular/core';
import { Investor } from '../model/Investor';
import { InvestserviceService } from '../service/investservice.service';

@Component({
  selector: 'app-addinvestor',
  templateUrl: './addinvestor.component.html',
  styleUrl: './addinvestor.component.css'
})
export class AddinvestorComponent {
  onSubmit() {
    this.saveInvestor();
    
    }
    investor:Investor = new Investor();
      
      constructor(private investorservice:InvestserviceService) {
    
      }
     
      saveInvestor() :void {
        this.investorservice.saveInvestor(this.investor).
        subscribe((data) => {
          console.log(data);
        },
        (error)=>console.log(error)
        )
      }

}

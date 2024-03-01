import { Component } from '@angular/core';
import { InvestserviceService } from '../service/investservice.service';
import { Investor } from '../model/Investor';

@Component({
  selector: 'app-allinvestor',
  templateUrl: './allinvestor.component.html',
  styleUrl: './allinvestor.component.css'
})
export class AllinvestorComponent {
  Investors :Investor[] =[]
  constructor(private service:InvestserviceService)
{

}
ngOnInit(): void{
  console.log("from onInit() ...");
  this.Investors =this.getInvestors();
 }
 
getInvestors() :any 
{
  this.service.getInvestors().subscribe((Investors) => {
    console.log(Investors);
    this.Investors =Investors;
  })
}
}

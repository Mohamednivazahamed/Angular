import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvtransactionComponent } from './invtransaction/invtransaction.component';
import { TransactComponent } from './transact/transact.component';
import { AllinvestorComponent } from './allinvestor/allinvestor.component';
import { AddinvestorComponent } from './addinvestor/addinvestor.component';
import { DeleteInvestorComponent } from './delete-investor/delete-investor.component';

const routes: Routes = [
  { path: 'allinvestordetails', component: AllinvestorComponent  },
  { path: 'transaction/dotransaction', component: TransactComponent },
  { path: 'transaction/History', component: InvtransactionComponent },
  { path: 'addinvestors', component: AddinvestorComponent },
  { path: 'deleteinvtor', component: DeleteInvestorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

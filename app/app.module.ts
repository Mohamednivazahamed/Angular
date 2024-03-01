import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { InvtransactionComponent } from './invtransaction/invtransaction.component';
import { HeaderComponent } from './header/header.component';
import { TransactComponent } from './transact/transact.component';
import { FormsModule, NgModel } from '@angular/forms';
import { AllinvestorComponent } from './allinvestor/allinvestor.component';
import { HttpClientModule } from '@angular/common/http';
import { AddinvestorComponent } from './addinvestor/addinvestor.component';
import { DeleteInvestorComponent } from './delete-investor/delete-investor.component';

@NgModule({
  declarations: [
    AppComponent,
   
    InvtransactionComponent,
    HeaderComponent,
    TransactComponent,
    AllinvestorComponent,
    AddinvestorComponent,
    DeleteInvestorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

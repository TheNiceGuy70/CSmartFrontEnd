import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';

import { EmployeeComponent } from './component/employee/employee.component';
import { EmployeeNewComponent } from './component/employee-new/employee-new.component';
import { EmployeeUpdateComponent } from './component/employee-update/employee-update.component';
import { InvoiceInComponent } from './component/invoicein/invoicein.component';
import { InvoiceInNewComponent } from './component/invoicein-new/invoicein-new.component';
import { InvoiceInUpdateComponent } from './component/invoicein-update/invoicein-update.component';
import { InvoiceOutComponent } from './component/invoiceout/invoiceout.component';
import { InvoiceOutNewComponent } from './component/invoiceout-new/invoiceout-new.component';
import { InvoiceOutUpdateComponent } from './component/invoiceout-update/invoiceout-update.component';
import { ProviderComponent } from "./component/provider/provider.component";
import { ProviderNewComponent } from './component/provider-new/provider-new.component';
import { ProviderUpdate } from "./component/provider-update/provider-update.component";
import { WorkingPointComponent } from "./component/workingpoint/workingpoint.component";
import { WorkingPointNewComponent } from './component/workingpoint-new/workingpoint-new.component';
import { WorkingPointUpdateComponent } from './component/workingpoint-update/workingpoint-update.component';

import { SidebarComponent } from "./component/sidebar/sidebar.component";
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './component/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    EmployeeComponent,
    HomeComponent,
    EmployeeNewComponent,
    EmployeeUpdateComponent,
    SidebarComponent,
    ProviderComponent,
    ProviderNewComponent,
    ProviderUpdate,
    WorkingPointComponent,
    InvoiceInComponent,
    InvoiceOutComponent,
    WorkingPointNewComponent,
    WorkingPointUpdateComponent,
    InvoiceInNewComponent,
    InvoiceInUpdateComponent,
    InvoiceOutNewComponent,
    InvoiceOutUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

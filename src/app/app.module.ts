import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { EmployeeComponent } from './component/employee/employee.component';
import { EmployeeNewComponent } from './component/employee-new/employee-new.component';
import { EmployeeUpdateComponent } from './component/employee-update/employee-update.component';
import { ProviderNewComponent } from './component/provider-new/provider-new.component';
import { ProviderUpdate } from "./component/provider-update/provider-update.component";
import { WorkingpointComponent } from "./component/workingpoint/workingpoint.component";
import { SidebarComponent } from "./component/sidebar/sidebar.component";
import { ProviderComponent } from "./component/provider/provider.component";
import { InvoiceinComponent } from './component/invoicein/invoicein.component';
import { InvoiceoutComponent } from './component/invoiceout/invoiceout.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './component/home/home.component';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
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
    WorkingpointComponent,
    InvoiceinComponent,
    InvoiceoutComponent
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

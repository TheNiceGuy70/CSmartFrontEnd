import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { EmployeeNewComponent } from './component/employee-new/employee-new.component';
import { EmployeeComponent } from './component/employee/employee.component';
import { EmployeeUpdateComponent } from './component/employee-update/employee-update.component';
import { ProviderComponent} from "./component/provider/provider.component";
import { ProviderNewComponent} from "./component/provider-new/provider-new.component";
import { ProviderUpdate} from "./component/provider-update/provider-update.component";
import { InvoiceInComponent} from "./component/invoicein/invoicein.component";
import { WorkingPointComponent } from './component/workingpoint/workingpoint.component';
import { WorkingPointNewComponent } from './component/workingpoint-new/workingpoint-new.component';
import { WorkingPointUpdateComponent } from './component/workingpoint-update/workingpoint-update.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'employees',
    component:EmployeeComponent
  },
  {
    path:'newEmployee',
    component:EmployeeNewComponent
  },
  {
    path:'editEmployee/:employeeId',
    component:EmployeeUpdateComponent
  },

  {
    path:'invoiceIns',
    component:InvoiceInComponent
  },

  {
    path:'providers',
    component:ProviderComponent
  },
  {
    path:'newProvider',
    component:ProviderNewComponent
  },
  {
    path:'editProvider/:providerId',
    component:ProviderUpdate
  },

  {
    path:'workingPoints',
    component:WorkingPointComponent
  },
  {
    path:'newWorkingPoint',
    component:WorkingPointNewComponent
  },
  {
    path:'editWorkingPoint/:workingPointId',
    component:WorkingPointUpdateComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

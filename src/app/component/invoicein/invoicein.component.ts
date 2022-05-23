import { Component, OnInit } from '@angular/core';
import {InvoiceIn} from "../../interface/invoicein";
import {InvoiceInService} from "../../service/invoicein.service";

@Component({
  selector: 'app-invoicein.ts',
  templateUrl: './invoicein.component.html',
  styleUrls: ['./invoicein.component.css']
})
export class InvoiceinComponent implements OnInit
{
  invoiceInList: InvoiceIn[] = [];

  constructor(public invoiceInService: InvoiceInService) { }

  ngOnInit(): void
  {
    this.invoiceInService.getAllInvoiceIns().subscribe({
      next: invoiceIns => this.invoiceInList = invoiceIns,
      error: err => console.error(err)
    });
  }

  deleteInvoiceIn(id:any)
  {
    this.invoiceInService.deleteInvoiceIn(id).subscribe(()=>
    {
      window.location.reload();
    });
  }
}

export interface InvoiceIn
{
  invoiceInId: string;
  code: string;
  date: string;
  articleNumber: number;
  productName: string;
  unitOfMeasure: string;
  quantity: number;
  unitaryPrice: number;
  valueWithoutTva: number;
  valueWithTva: number;
}

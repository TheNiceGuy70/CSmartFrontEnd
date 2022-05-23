import { Address } from "./address";

export interface Provider
{
  providerId: string;
  fiscalCode: string;
  address: Address;
}

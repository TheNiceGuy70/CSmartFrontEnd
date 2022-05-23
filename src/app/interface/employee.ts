import { Address } from "./address";
import { Contract } from "./contract";

export interface Employee
{
  employeeId: string;
  firstName: string;
  lastName: string;
  cnp: string;
  role: string;
  studies: string;
  employmentDate: string;
  address: Address;
  contract: Contract;
}

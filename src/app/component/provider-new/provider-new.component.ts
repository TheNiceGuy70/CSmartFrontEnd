import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProviderService} from "../../service/provider.service";
import {Provider} from "../../interface/provider";
import {Address} from "../../interface/address";

@Component({
  selector: 'app-new-provider',
  templateUrl: './provider-new.component.html',
  styleUrls: ['./provider-new.component.css']
})
export class ProviderNewComponent implements OnInit
{
  providerForm!: FormGroup;
  formMessage: string = "";
  providerId: string | undefined;

  address: Address = {
    addressId: "",
    county: "",
    locality: "",
    street: "",
    streetNumber: "",
    blockNumber: "",
    stairNumber: "",
    floor: 0,
    apartmentNumber: 0
  }
  provider: Provider = {
    providerId: "",
    fiscalCode: "",
    address: this.address
  }

  fiscalCode!: string;

  constructor(private providerService: ProviderService) { }

  ngOnInit(): void {
    this.buildProviderForm();
  }

  buildProviderForm(){
    this.providerForm = new FormGroup({
      fiscalCode:new FormControl("fiscalCode",[Validators.required]),
      county:new FormControl("county",[Validators.required]),
      locality:new FormControl("locality",[Validators.required]),
      street:new FormControl("street",[Validators.required]),
      streetNumber:new FormControl("streetNumber",[Validators.required]),
      blockNumber:new FormControl("blockNumber"),
      stairNumber:new FormControl("stairNumber"),
      floor:new FormControl("floor"),
      apartmentNumber:new FormControl("apartmentNumber")
    });
  }

  submitProvider()
  {
    if (this.providerForm.valid)
    {
        this.providerService.addNewProvider(this.provider).subscribe(() => {
          window.location.reload();
          console.log("Product deleted");
    });
        this.formMessage = "Your provider has been saved";
    }
    else
    {
      console.log('Not good')
    }
  }
}

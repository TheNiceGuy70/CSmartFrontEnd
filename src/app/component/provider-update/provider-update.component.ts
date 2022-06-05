import { Component, OnInit } from '@angular/core';
import { Provider } from "../../interface/provider";
import { ProviderService } from "../../service/provider.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-provider-update',
  templateUrl: './provider-update.component.html',
  styleUrls: ['./provider-update.component.css']
})
export class ProviderUpdate implements OnInit {
  providerForm!: FormGroup;
  providerId!: string | undefined;
  formMessage: string = '';
  provider!: Provider;

  constructor(private providerService: ProviderService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.providerId)
    this.providerId = this.route.snapshot.params['providerId'];
    this.providerService.getProviderById(this.providerId).subscribe((data: Provider) => {
      this.provider = data;
    })

    this.providerForm = new FormGroup({
      fiscalCode: new FormControl("fiscalCode", [Validators.required]),
      county: new FormControl("county", [Validators.required]),
      locality: new FormControl("locality", [Validators.required]),
      street: new FormControl("street", [Validators.required]),
      streetNumber: new FormControl("streetNumber", [Validators.required]),
      blockNumber: new FormControl("blockNumber"),
      stairNumber: new FormControl("stairNumber"),
      floor: new FormControl("floor"),
      apartmentNumber: new FormControl("apartmentNumber")
    });
  }

  sendUpdateProviderRequest() {
    if (this.providerForm.valid) {
      this.providerService.updateProvider(this.providerId, this.provider).subscribe(() => {
        window.location.reload();
        console.log("Product updated");
      });
    }
    else {
      this.formMessage = "Please update the product form before submitting";
    }
  }
}

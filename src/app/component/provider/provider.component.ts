import { Component, OnInit } from '@angular/core';
import {Provider} from "../../interface/provider";
import {ProviderService} from "../../service/provider.service";

@Component({
  selector: 'app-provider',
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.css']
})
export class ProviderComponent implements OnInit {
  providerList: Provider[] = [];

  constructor(public providerService: ProviderService) {
  }

  ngOnInit(): void
  {
    this.providerService.getAllProviders().subscribe({
      next: providers => this.providerList = providers,
      error: err => console.error(err)
    });
  }

  deleteProvider(id:any)
  {
    this.providerService.deleteProvider(id).subscribe(()=>
    {
      window.location.reload();
    });
  }
}

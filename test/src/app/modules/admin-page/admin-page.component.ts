import { Component, OnInit } from '@angular/core';
import { DetailsService } from 'src/app/services/truckdetails/details.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
  isVehicleShow = true;
  isMapShow = false;
  public list = [];
  constructor(private assignService: DetailsService) { }

  ngOnInit(): void {
    this.assignService.getData()
    .subscribe(data => this.list = data);
  }
  toggleVehicleData() {
    this.isVehicleShow = !this.isVehicleShow;
  }
  toggleMapData() {
    this.isMapShow = !this.isMapShow;
  }
}

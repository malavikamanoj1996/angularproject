import { Component, OnInit } from '@angular/core';
import { DetailsService } from 'src/app/services/truckdetails/details.service';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  zoom = 5;
  public list ;
  constructor(private assignService: DetailsService) { }

  ngOnInit(): void {
    this.assignService.getData()
    .subscribe(data => this.list = data);
  }

}

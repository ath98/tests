import { Component, OnInit } from '@angular/core';
import { BikeService } from '../bike.service';

@Component({
  selector: 'app-bike-list',
  templateUrl: './bike-list.component.html',
  styleUrls: ['./bike-list.component.css']
})
export class BikeListComponent implements OnInit {
  bikes: any[] = []; // To hold the bike data

  constructor(private bikeService: BikeService) {}

  ngOnInit(): void {
    this.bikeService.getBikes().subscribe(
      (data) => {
        this.bikes = data;
      },
      (error) => {
        console.error('Error fetching bike data:', error);
      }
    );
  }
}

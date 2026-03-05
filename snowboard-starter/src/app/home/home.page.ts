import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../shared/components/header/header.component';
import { IonContent } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';
import { TripPlannerService } from '../core/services/tripPlanner/tripPlanner.service';
import { TripPlannerResponse } from '../core/models/tripPlanner/tripPlanner.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    HeaderComponent,
    IonContent
  ],
})
export class HomePage implements OnInit {
  constructor(private tripPlannerService: TripPlannerService) {}

  tripPlans: TripPlannerResponse[] = [];

  ngOnInit(): void {
    this.tripPlannerService.getTripPlans()
    .subscribe({
      next: (tripPlans) => {
        this.tripPlans = tripPlans;
        console.log(this.tripPlans);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  router = inject(Router);

  navigateToPlanATrip() {
    this.router.navigate(['trip-planner-form'])
  }
}

import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../shared/components/header/header.component';
import { IonContent } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { TripPlannerService } from '../core/services/tripPlanner/tripPlanner.service';
import { TripPlannerResponse } from '../core/models/tripPlanner/tripPlanner.model';
import { TripPlanDetailCardComponent } from '../trip-planner/components/trip-plan-detail-card/trip-plan-detail-card.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    HeaderComponent,
    IonContent,
    TripPlanDetailCardComponent
  ],
})
export class HomePage {
  constructor(private tripPlannerService: TripPlannerService) {}

  tripPlans: TripPlannerResponse[] = [];

  ionViewDidEnter(): void {
    this.tripPlannerService.getTripPlans()
    .subscribe({
      next: (tripPlans) => {
        this.tripPlans = tripPlans.map(tripPlan => ({
          ...tripPlan,
          arrivalDate: new Date(tripPlan.arrivalDate),
          departureDate: new Date(tripPlan.departureDate)
        }));
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

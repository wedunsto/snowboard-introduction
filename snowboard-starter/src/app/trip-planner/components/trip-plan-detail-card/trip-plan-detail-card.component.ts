import { Component, input } from '@angular/core';
import { IonButton } from '@ionic/angular/standalone'

@Component({
  selector: 'app-trip-plan-detail-card',
  standalone: true,
  templateUrl: './trip-plan-detail-card.component.html',
  styleUrls: ['./trip-plan-detail-card.component.scss'],
  imports: [
    IonButton
  ]
})
export class TripPlanDetailCardComponent {
  destination = input<string>('');
  arrivalDate = input<Date>(new Date());
  departureDate = input<Date>(new Date());
  budget = input<number>(0.00);
  completed = input<boolean>(false);

  formatDate(date: Date): string {
    const formattedDate = date.toLocaleDateString('en-US',
      {
        weekday: 'short',
        month: 'short',
        day: '2-digit',
        year: 'numeric'
      }
    );

    return formattedDate;
  }

  openTripPlanDetails(): void {
    console.log('test');
  }
}

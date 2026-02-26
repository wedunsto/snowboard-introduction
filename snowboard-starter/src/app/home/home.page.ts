import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../shared/components/header/header.component';
import { IonContent } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

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
export class HomePage {
  constructor() {}

  router = inject(Router);

  navigateToPlanATrip() {
    this.router.navigate(['trip-planner-form'])
  }
}

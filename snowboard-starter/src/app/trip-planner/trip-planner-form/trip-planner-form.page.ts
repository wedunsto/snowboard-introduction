import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-trip-planner-form',
  templateUrl: './trip-planner-form.page.html',
  styleUrls: ['./trip-planner-form.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class TripPlannerFormPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

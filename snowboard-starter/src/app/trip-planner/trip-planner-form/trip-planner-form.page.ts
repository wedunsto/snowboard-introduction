import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AbstractControl,
  FormBuilder,
  ReactiveFormsModule,
  ValidationErrors,
  Validators
} from '@angular/forms';
import {
  IonContent,
  IonButtons,
  IonButton
} from '@ionic/angular/standalone';
import { HeaderMenuComponent } from 'src/app/shared/components/header-menu/header-menu.component';
import { FormInputComponent } from '../components/form-input/form-input.component';
import { TripPlannerService } from 'src/app/core/services/tripPlanner/tripPlanner.service';

@Component({
  selector: 'app-trip-planner-form',
  templateUrl: './trip-planner-form.page.html',
  styleUrls: ['./trip-planner-form.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    CommonModule,
    ReactiveFormsModule,
    HeaderMenuComponent,
    FormInputComponent,
    IonButtons,
    IonButton
  ]
})
export class TripPlannerFormPage implements OnInit {

  constructor(
    private fb: FormBuilder,
    private tripPlannerService: TripPlannerService
  ) { }

  tripForm !: ReturnType<FormBuilder['group']>;

  ngOnInit() {
    // Create the form when the trip planner page initalizes
    this.tripForm = this.fb.group({
      destination: ['', [Validators.required, this.destinationValidation]],
      arrivalDate: [null, [Validators.required]],
      departureDate: [null, [Validators.required]],
      budget: [0.00, [Validators.required, this.budgetValidation]]
    })
  }

  destinationValidation(control: AbstractControl): ValidationErrors | null {
    const destination: string = control.value ?? '';

    const errors: ValidationErrors = {};

    if (destination.length < 1) {
      errors['too_short'] = true;
    }

    return Object.keys(errors).length ? errors : null;
  }

  budgetValidation(control: AbstractControl): ValidationErrors | null {
    const budget: number = control.value ?? 0.00;

    const errors: ValidationErrors = {};

    if (budget === 0.00) {
      errors['no_budget'];
    }
    else if (budget < 0) {
      errors['negative budget'];
    }

    if (!/^\d+(?:\.\d{1,2})?$/.test(budget.toString())) {
      errors['invalid_format'];
    }

    return Object.keys(errors).length ? errors : null;
  }

  submitTripForm() {
    const destination: string = this.tripForm.get('destination')?.value;
    const arrivalDate: Date = new Date(this.tripForm.get('arrivalDate')?.value);
    const departureDate: Date = new Date(this.tripForm.get('departureDate')?.value);
    const budget: number = parseFloat(this.tripForm.get('budget')?.value);

    this.tripPlannerService.createTripPlan({
      destination,
      arrivalDate,
      departureDate,
      budget
    }).subscribe({
      next: (res) => console.log('Trip plan created: ', res),
      error: (err) => console.error('Create trip failed: ', err),
    });
  }
}

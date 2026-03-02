import { Component, input } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { 
  IonInput,
  IonDatetime,
  IonDatetimeButton,
  IonModal
} from '@ionic/angular/standalone';

type inputType = 'destination' | 'date' | 'budget';

type datetimeId = 'arrival' | 'departure';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss'],
  standalone: true,
  imports: [
    IonInput,
    IonDatetime,
    IonDatetimeButton,
    IonModal
  ]
})
export class FormInputComponent {
  title = input<string>('');
  placeholder = input<string>('');
  type = input<inputType>('destination');
  datetimeId = input<datetimeId>('arrival');
  control = input<AbstractControl | null>(null);
}

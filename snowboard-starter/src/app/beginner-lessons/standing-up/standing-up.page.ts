import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonMenu,
  IonButtons,
  IonMenuButton,
  IonAccordionGroup,
  IonAccordion,
  IonItem,
  IonLabel,
  IonIcon,
} from '@ionic/angular/standalone';
import { InstructionTextComponent } from 'src/app/shared/components/instruction-text/instruction-text.component';
import { standingUpLesson } from 'src/assets/data/lessons/beginner-lessons';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';

@Component({
  selector: 'app-standing-up',
  templateUrl: './standing-up.page.html',
  styleUrls: ['./standing-up.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    CommonModule,
    InstructionTextComponent,
    HeaderComponent
  ]
})
export class StandingUpPage {
  lessonInstructions: string[] = standingUpLesson;
}

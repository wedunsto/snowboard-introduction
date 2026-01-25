import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonContent,
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
  // Initialize the utility array with the first instruction text
  lessonInstructions: string[] = [standingUpLesson[0]];

  currentIndex: number = 1;

  // If there is another instruction text, add it to the utility array
  addInstructionText = () => {
    if (this.currentIndex <= standingUpLesson.length - 1) {
      this.lessonInstructions.push(standingUpLesson[this.currentIndex]);
    }
    this.currentIndex += 1;
  }

  // Determine if an instruction text button is disabled
  isButtonDisabled = (instructionText: string): boolean => {
    if (this.currentIndex >= standingUpLesson.length - 1) {
      return true;
    }
    return instructionText !== standingUpLesson[this.currentIndex - 1];
  }
}

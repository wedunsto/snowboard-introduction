import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonContent,
} from '@ionic/angular/standalone';
import { InstructionTextComponent } from 'src/app/shared/components/instruction-text/instruction-text.component';
import { standingUpLesson } from 'src/assets/data/lessons/beginner-lessons';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { addInstructionText, isButtonDisabled } from 'src/app/shared/helper-functions/lesson-helper-functions';

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

  addInstructionText() {
    this.currentIndex = addInstructionText(
      this.currentIndex,
      standingUpLesson,
      this.lessonInstructions
    );
  }

  isButtonDisabled(instructionText: string) {
    return isButtonDisabled(
      this.currentIndex,
      instructionText,
      standingUpLesson
    );
  }
}

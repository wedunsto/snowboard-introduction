import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent } from '@ionic/angular/standalone';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { InstructionTextComponent } from 'src/app/shared/components/instruction-text/instruction-text.component';
import { toeStopLesson } from 'src/assets/data/lessons/beginner-lessons';
import { addInstructionText, isButtonDisabled } from 'src/app/shared/helper-functions/lesson-helper-functions';

@Component({
  selector: 'app-toe-stop',
  templateUrl: './toe-stop.page.html',
  styleUrls: ['./toe-stop.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    CommonModule,
    HeaderComponent,
    InstructionTextComponent
  ]
})
export class ToeStopPage {
  // Initialize the utility array with the first instruction text
  lessonInstructions: string[] = [toeStopLesson[0]];

  currentIndex: number = 1;

  addInstructionText() {
    this.currentIndex = addInstructionText(
      this.currentIndex,
      toeStopLesson,
      this.lessonInstructions
    );
  }

  isButtonDisabled(instructionText: string) {
    return isButtonDisabled(
      this.currentIndex,
      instructionText,
      toeStopLesson
    );
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent } from '@ionic/angular/standalone';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { InstructionTextComponent } from 'src/app/shared/components/instruction-text/instruction-text.component';
import { climbingUpHillLesson } from 'src/assets/data/lessons/beginner-lessons';
import { addInstructionText, isButtonDisabled } from 'src/app/shared/helper-functions/lesson-helper-functions';

@Component({
  selector: 'app-climbing-up-hill',
  templateUrl: './climbing-up-hill.page.html',
  styleUrls: ['./climbing-up-hill.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    CommonModule,
    HeaderComponent,
    InstructionTextComponent
  ]
})
export class ClimbingUpHillPage {
  // Initialize the utility array with the first instruction text
  lessonInstructions: string[] = [climbingUpHillLesson[0]];

  currentIndex: number = 1;

  addInstructionText() {
    this.currentIndex = addInstructionText(
      this.currentIndex,
      climbingUpHillLesson,
      this.lessonInstructions
    );
  }

  isButtonDisabled(instructionText: string) {
    return isButtonDisabled(
      this.currentIndex,
      instructionText,
      climbingUpHillLesson
    );
  }
}

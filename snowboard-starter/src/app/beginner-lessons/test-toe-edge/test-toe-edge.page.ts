import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent } from '@ionic/angular/standalone';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { toeEdgeLesson } from 'src/assets/data/lessons/beginner-lessons';
import { InstructionTextComponent } from 'src/app/shared/components/instruction-text/instruction-text.component';
import { addInstructionText, isButtonDisabled } from 'src/app/shared/helper-functions/lesson-helper-functions';

@Component({
  selector: 'app-test-toe-edge',
  templateUrl: './test-toe-edge.page.html',
  styleUrls: ['./test-toe-edge.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    CommonModule,
    HeaderComponent,
    InstructionTextComponent
  ]
})
export class TestToeEdgePage {
  // Initialize the utility array with the first instruction text
  lessonInstructions: string[] = [toeEdgeLesson[0]];

  currentIndex: number = 1;

  addInstructionText() {
    this.currentIndex = addInstructionText(
      this.currentIndex,
      toeEdgeLesson,
      this.lessonInstructions
    );
  }

  isButtonDisabled(instructionText: string) {
    return isButtonDisabled(
      this.currentIndex,
      instructionText,
      toeEdgeLesson
    )
  }
}

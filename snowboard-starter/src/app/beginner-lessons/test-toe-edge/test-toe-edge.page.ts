import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent } from '@ionic/angular/standalone';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { toeEdgeLesson } from 'src/assets/data/lessons/beginner-lessons';
import { InstructionTextComponent } from 'src/app/shared/components/instruction-text/instruction-text.component';

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

  // If there is another instruction text, add it to the utility array
    addInstructionText = () => {
      if (this.currentIndex <= toeEdgeLesson.length - 1) {
        this.lessonInstructions.push(toeEdgeLesson[this.currentIndex]);
      }
      this.currentIndex += 1;
    }
  
    // Determine if an instruction text button is disabled
    isButtonDisabled = (instructionText: string): boolean => {
      if (this.currentIndex >= toeEdgeLesson.length - 1) {
        return true;
      }
      return instructionText !== toeEdgeLesson[this.currentIndex - 1];
    }
}

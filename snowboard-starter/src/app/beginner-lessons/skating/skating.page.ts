import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent } from '@ionic/angular/standalone';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { InstructionTextComponent } from 'src/app/shared/components/instruction-text/instruction-text.component';
import { skatingLesson } from 'src/assets/data/lessons/beginner-lessons';

@Component({
  selector: 'app-skating',
  templateUrl: './skating.page.html',
  styleUrls: ['./skating.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    CommonModule,
    HeaderComponent,
    InstructionTextComponent
  ]
})
export class SkatingPage {
  // Initialize the utility array with the first instruction text
  lessonInstructions: string[] = [skatingLesson[0]];

  currentIndex: number = 1;

  // If there is another instruction text, add it to the utility array
    addInstructionText = () => {
      if (this.currentIndex <= skatingLesson.length - 1) {
        this.lessonInstructions.push(skatingLesson[this.currentIndex]);
      }
      this.currentIndex += 1;
    }
  
    // Determine if an instruction text button is disabled
    isButtonDisabled = (instructionText: string): boolean => {
      if (this.currentIndex >= skatingLesson.length - 1) {
        return true;
      }
      return instructionText !== skatingLesson[this.currentIndex - 1];
    }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent } from '@ionic/angular/standalone';
import { addInstructionText, isButtonDisabled } from 'src/app/shared/helper-functions/lesson-helper-functions';
import { heelStopLesson } from 'src/assets/data/lessons/beginner-lessons';
import { InstructionTextComponent } from 'src/app/shared/components/instruction-text/instruction-text.component';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';

@Component({
  selector: 'app-heel-stop',
  templateUrl: './heel-stop.page.html',
  styleUrls: ['./heel-stop.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    CommonModule,
    FormsModule,
    InstructionTextComponent,
    HeaderComponent
  ]
})
export class HeelStopPage {
  // Initialize the utility array with the first instruction text
    lessonInstructions: string[] = [heelStopLesson[0]];
  
    currentIndex: number = 1;
  
    addInstructionText() {
      this.currentIndex = addInstructionText(
        this.currentIndex,
        heelStopLesson,
        this.lessonInstructions
      );
    }
  
    isButtonDisabled(instructionText: string) {
      return isButtonDisabled(
        this.currentIndex,
        instructionText,
        heelStopLesson
      );
    }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent } from '@ionic/angular/standalone';
import { Lesson } from 'src/app/shared/concrete-classes/lessson';
import { managingSpeed } from 'src/assets/data/lessons/beginner-lessons';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { InstructionTextComponent } from 'src/app/shared/components/instruction-text/instruction-text.component';
import { addInstructionText, isButtonDisabled } from 'src/app/shared/helper-functions/lesson-helper-functions';

@Component({
  selector: 'app-managing-speed',
  templateUrl: './managing-speed.page.html',
  styleUrls: ['./managing-speed.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    CommonModule,
    HeaderComponent,
    InstructionTextComponent
  ]
})
export class ManagingSpeedPage extends Lesson {
  override completeLessonInstructions = managingSpeed.find(l => l.type === 'heel')?.lesson ?? [];

  override lessonInstructions = [this.completeLessonInstructions[0]]

  toeInstructions: string[] = managingSpeed.find(l => l.type === "toe")?.lesson??[];

  toeLessonInstructions: string[] = [this.toeInstructions[0]];

  toeCurrentIndex: number = 1;

  addToeInstructionText() {
    this.toeCurrentIndex = addInstructionText(
      this.toeCurrentIndex,
      this.toeInstructions,
      this.toeLessonInstructions
    )
  }

  isToeButtonDisabled(instructionText: string) {
    return isButtonDisabled(
      this.toeCurrentIndex,
      instructionText,
      this.toeInstructions
    )
  }
}

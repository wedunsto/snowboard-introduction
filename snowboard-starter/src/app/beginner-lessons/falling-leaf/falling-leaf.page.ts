import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent } from '@ionic/angular/standalone';
import { InstructionTextComponent } from 'src/app/shared/components/instruction-text/instruction-text.component';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { Lesson } from 'src/app/shared/concrete-classes/lessson';
import { fallingLeaf } from 'src/assets/data/lessons/beginner-lessons';
import { addInstructionText, isButtonDisabled } from 'src/app/shared/helper-functions/lesson-helper-functions';

@Component({
  selector: 'app-falling-leaf',
  templateUrl: './falling-leaf.page.html',
  styleUrls: ['./falling-leaf.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    CommonModule,
    HeaderComponent,
    InstructionTextComponent
  ]
})
export class FallingLeafPage extends Lesson {
  override completeLessonInstructions = fallingLeaf.find(l => l.type === "heel")?.lesson??[];

  override lessonInstructions = [this.completeLessonInstructions[0]];

  toeInstructions: string[] = fallingLeaf.find(l => l.type === "toe")?.lesson??[];

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

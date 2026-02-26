import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent } from '@ionic/angular/standalone';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { InstructionTextComponent } from 'src/app/shared/components/instruction-text/instruction-text.component';
import { Lesson } from 'src/app/shared/concrete-classes/lessson';
import { approachFallLine } from 'src/assets/data/lessons/beginner-lessons';

@Component({
  selector: 'app-approach-fall-line',
  templateUrl: './approach-fall-line.page.html',
  styleUrls: ['./approach-fall-line.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    CommonModule,
    HeaderComponent,
    InstructionTextComponent
  ]
})
export class ApproachFallLinePage extends Lesson {
  override completeLessonInstructions = approachFallLine;

  override lessonInstructions = [this.completeLessonInstructions[0]];
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent } from '@ionic/angular/standalone';
import { Lesson } from 'src/app/shared/concrete-classes/lessson';
import { chairLift } from 'src/assets/data/lessons/beginner-lessons';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { InstructionTextComponent } from 'src/app/shared/components/instruction-text/instruction-text.component';

@Component({
  selector: 'app-chair-lift',
  templateUrl: './chair-lift.page.html',
  styleUrls: ['./chair-lift.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    CommonModule,
    HeaderComponent,
    InstructionTextComponent
  ]
})
export class ChairLiftPage extends Lesson {
  override completeLessonInstructions = chairLift;

  override lessonInstructions = [this.completeLessonInstructions[0]];
}

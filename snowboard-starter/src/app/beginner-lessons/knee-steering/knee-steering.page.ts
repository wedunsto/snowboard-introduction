import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent } from '@ionic/angular/standalone';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { InstructionTextComponent } from 'src/app/shared/components/instruction-text/instruction-text.component';
import { Lesson } from 'src/app/shared/concrete-classes/lessson';
import { kneeSteering } from 'src/assets/data/lessons/beginner-lessons';

@Component({
  selector: 'app-knee-steering',
  templateUrl: './knee-steering.page.html',
  styleUrls: ['./knee-steering.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    CommonModule,
    HeaderComponent,
    InstructionTextComponent
  ]
})
export class KneeSteeringPage extends Lesson {
  override completeLessonInstructions = kneeSteering;

  override lessonInstructions = [this.completeLessonInstructions[0]];
}

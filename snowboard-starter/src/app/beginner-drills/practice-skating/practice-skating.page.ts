import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonContent,
  IonItem,
  IonInput
} from '@ionic/angular/standalone';
import { Drill } from 'src/app/shared/concrete-classes/drills';
import { practiceSkating } from 'src/assets/data/drills/beginner-drills';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { InstructionTextComponent } from 'src/app/shared/components/instruction-text/instruction-text.component';

@Component({
  selector: 'app-practice-skating',
  templateUrl: './practice-skating.page.html',
  styleUrls: ['./practice-skating.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    CommonModule,
    HeaderComponent,
    InstructionTextComponent,
    IonItem,
    IonInput
    ]
})
export class PracticeSkatingPage extends Drill {
  override reps = 5;

  override completeLessonInstructions = practiceSkating(this.reps);

  override lessonInstructions = [this.completeLessonInstructions[0]];
}

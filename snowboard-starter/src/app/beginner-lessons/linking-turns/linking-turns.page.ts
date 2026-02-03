import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent } from '@ionic/angular/standalone';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { InstructionTextComponent } from 'src/app/shared/components/instruction-text/instruction-text.component';
import { Lesson } from 'src/app/shared/concrete-classes/lessson';
import { linkingTurns } from 'src/assets/data/lessons/beginner-lessons';

@Component({
  selector: 'app-linking-turns',
  templateUrl: './linking-turns.page.html',
  styleUrls: ['./linking-turns.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    CommonModule,
    HeaderComponent,
    InstructionTextComponent
  ]
})
export class LinkingTurnsPage extends Lesson {
  override completeLessonInstructions = linkingTurns;

  override lessonInstructions = [this.completeLessonInstructions[0]];
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Lesson } from 'src/app/shared/concrete-classes/lessson';
import { standingUpWithBothBindings } from 'src/assets/data/lessons/beginner-lessons';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { InstructionTextComponent } from 'src/app/shared/components/instruction-text/instruction-text.component';

@Component({
  selector: 'app-standing-with-bindings',
  templateUrl: './standing-with-bindings.page.html',
  styleUrls: ['./standing-with-bindings.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    CommonModule,
    HeaderComponent,
    InstructionTextComponent
    ]
})
export class StandingWithBindingsPage extends Lesson {
  override completeLessonInstructions = standingUpWithBothBindings;

  override lessonInstructions = [this.completeLessonInstructions[0]];
}

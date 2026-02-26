import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonContent,
  IonInput,
} from '@ionic/angular/standalone';
import { Drill } from 'src/app/shared/concrete-classes/drills';
import { practiceSkating } from 'src/assets/data/drills/beginner-drills';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { InstructionTextComponent } from 'src/app/shared/components/instruction-text/instruction-text.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    IonInput,
    FormsModule,
    ReactiveFormsModule
    ]
})
export class PracticeSkatingPage extends Drill {
  constructor(fb: FormBuilder) {
    super(fb);
  }

  override ngOnInit() {
    super.ngOnInit();

    // Initialize drill instructions
    this.reps = this.drillForm.get('reps')?.value ?? 0;
    this.completeLessonInstructions = practiceSkating;
    this.lessonInstructions = [this.completeLessonInstructions[0]];

    // Update drill instructions
    this.drillForm.get('reps')?.valueChanges.subscribe((value) => {
      this.reps = value ?? 0;
    })
  }
}

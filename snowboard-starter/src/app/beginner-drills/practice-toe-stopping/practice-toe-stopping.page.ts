import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { IonContent, IonInput } from '@ionic/angular/standalone';
import { Drill } from 'src/app/shared/concrete-classes/drills';
import { practiceToeStoppingOneFoot } from 'src/assets/data/drills/beginner-drills';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { InstructionTextComponent } from 'src/app/shared/components/instruction-text/instruction-text.component';

@Component({
  selector: 'app-practice-toe-stopping',
  templateUrl: './practice-toe-stopping.page.html',
  styleUrls: ['./practice-toe-stopping.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    CommonModule,
    IonInput,
    ReactiveFormsModule,
    HeaderComponent,
    InstructionTextComponent
  ]
})
export class PracticeToeStoppingPage extends Drill {

  constructor(fb: FormBuilder) {
    super(fb);
  }

  override ngOnInit() {
    super.ngOnInit();

    // Initialize drill instructions
    this.reps = this.drillForm.get('reps')?.value ?? 0;
    this.completeLessonInstructions = practiceToeStoppingOneFoot;
    this.lessonInstructions = [this.completeLessonInstructions[0]];

    // Update drill instructions
    this.drillForm.get('reps')?.valueChanges.subscribe((value) => {
      this.reps = value ?? 0;
    })
  }

}

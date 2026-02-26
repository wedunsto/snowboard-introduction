import { Component,  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { IonContent, IonInput } from '@ionic/angular/standalone';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { InstructionTextComponent } from 'src/app/shared/components/instruction-text/instruction-text.component';
import { Drill } from 'src/app/shared/concrete-classes/drills';
import { practiceHeelFallingLeaf } from 'src/assets/data/drills/beginner-drills';

@Component({
  selector: 'app-practice-heel-falling-leaf',
  templateUrl: './practice-heel-falling-leaf.page.html',
  styleUrls: ['./practice-heel-falling-leaf.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    CommonModule,
    ReactiveFormsModule,
    IonInput,
    HeaderComponent,
    InstructionTextComponent
  ]
})
export class PracticeHeelFallingLeafPage extends Drill {

  constructor(fb: FormBuilder) {
    super(fb);
  }

  override ngOnInit() {
      super.ngOnInit();
  
      // Initialize drill instructions
      this.reps = this.drillForm.get('reps')?.value ?? 0;
      this.completeLessonInstructions = practiceHeelFallingLeaf;
      this.lessonInstructions = [this.completeLessonInstructions[0]];
  
      // Update drill instructions
      this.drillForm.get('reps')?.valueChanges.subscribe((value) => {
        this.reps = value ?? 0;
      })
    }
}

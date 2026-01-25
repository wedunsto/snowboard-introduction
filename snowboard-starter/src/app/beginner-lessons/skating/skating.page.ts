import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent } from '@ionic/angular/standalone';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { InstructionTextComponent } from 'src/app/shared/components/instruction-text/instruction-text.component';
import { skating } from 'src/assets/data/lessons/beginner-lessons';

@Component({
  selector: 'app-skating',
  templateUrl: './skating.page.html',
  styleUrls: ['./skating.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    CommonModule,
    HeaderComponent,
    InstructionTextComponent
  ]
})
export class SkatingPage {
  lessonInstructions: string[] = skating;
}

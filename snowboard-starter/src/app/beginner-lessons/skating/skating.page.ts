import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent } from '@ionic/angular/standalone';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { InstructionTextComponent } from 'src/app/shared/components/instruction-text/instruction-text.component';
import { skatingLesson } from 'src/assets/data/lessons/beginner-lessons';
import { addInstructionText, isButtonDisabled } from 'src/app/shared/helper-functions/lesson-helper-functions';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-skating',
  templateUrl: './skating.page.html',
  styleUrls: ['./skating.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    CommonModule,
    HeaderComponent,
    InstructionTextComponent,
  ]
})
export class SkatingPage {
  constructor(private alertCtrl: AlertController) {}

  caution:string = skatingLesson[0];

  // Initialize the utility array with the first instruction text
  lessonInstructions: string[] = [skatingLesson[1]];

  currentIndex: number = 2;

  addInstructionText() {
    this.currentIndex = addInstructionText(
      this.currentIndex,
      skatingLesson,
      this.lessonInstructions
    );
  }

  isButtonDisabled(instructionText: string): boolean {
    return isButtonDisabled(
      this.currentIndex,
      instructionText,
      skatingLesson
    );
  }

  async ionViewDidEnter() {
    const alert = await this.alertCtrl.create({
      header: "Things To Remember",
      message: this.caution,
      buttons: ["Ok"],
    });

    await alert.present();
  }
}

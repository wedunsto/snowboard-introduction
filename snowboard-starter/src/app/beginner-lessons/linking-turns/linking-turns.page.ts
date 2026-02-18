import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent } from '@ionic/angular/standalone';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { InstructionTextComponent } from 'src/app/shared/components/instruction-text/instruction-text.component';
import { Lesson } from 'src/app/shared/concrete-classes/lessson';
import { fallLineDuration, linkingTurns } from 'src/assets/data/lessons/beginner-lessons';
import { AlertController } from '@ionic/angular';

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
  constructor(private alertCtrl: AlertController) {
    super();
  }

  override completeLessonInstructions = linkingTurns;

  override lessonInstructions = [this.completeLessonInstructions[0]];

  async ionViewDidEnter() {
    const alert = this.alertCtrl.create({
      header: "Things To Remember",
      message: fallLineDuration,
      buttons: ["Ok"],
    });

    (await alert).present();
  }
}

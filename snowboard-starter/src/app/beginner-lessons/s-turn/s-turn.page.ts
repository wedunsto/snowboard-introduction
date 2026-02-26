import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent } from '@ionic/angular/standalone';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { InstructionTextComponent } from 'src/app/shared/components/instruction-text/instruction-text.component';
import { Lesson } from 'src/app/shared/concrete-classes/lessson';
import { fallLineDuration, STurn } from 'src/assets/data/lessons/beginner-lessons';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-s-turn',
  templateUrl: './s-turn.page.html',
  styleUrls: ['./s-turn.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    CommonModule,
    HeaderComponent,
    InstructionTextComponent
  ]
})
export class STurnPage extends Lesson{
  constructor(private alertCtrl: AlertController) {
    super();
  }

  override completeLessonInstructions = STurn;

  override lessonInstructions = [this.completeLessonInstructions[0]];

  async ionViewDidEnter() {
    const alert = await this.alertCtrl.create({
      header: "Things To Remember",
      message: fallLineDuration,
      buttons: ["Ok"],
    });

    await alert.present();
  }
}

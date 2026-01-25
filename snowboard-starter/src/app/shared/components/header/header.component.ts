import { Component, Input } from '@angular/core';
import {
  IonHeader,
  IonIcon,
  IonButton,
  IonButtons,
  IonTitle,
  IonMenuButton,
  IonToolbar,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { home } from 'ionicons/icons';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [
    IonHeader,
    IonIcon,
    IonButton,
    IonButtons,
    IonTitle,
    IonMenuButton,
    IonToolbar,
    RouterModule
  ],
})
export class HeaderComponent {
  constructor () {
    addIcons({ home });
  }

  @Input() title!:string;
  @Input() isHomePage!:boolean;
}

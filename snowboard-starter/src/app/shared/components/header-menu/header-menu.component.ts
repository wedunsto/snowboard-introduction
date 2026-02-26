import { Component, inject, input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonButton, IonButtons, IonHeader, IonIcon, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { home } from 'ionicons/icons';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonIcon,
    IonButtons,
    IonButton,
    IonTitle,
    IonToolbar
  ]
})
export class HeaderMenuComponent {

  constructor() {
    addIcons({ home });
  }

  title = input<string>('');

  router = inject(Router);

  navigateHome() {
    this.router.navigate(['/home']);
  }
}

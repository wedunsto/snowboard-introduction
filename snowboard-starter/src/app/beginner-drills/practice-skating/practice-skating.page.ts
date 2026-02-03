import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-practice-skating',
  templateUrl: './practice-skating.page.html',
  styleUrls: ['./practice-skating.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class PracticeSkatingPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-test-toe-edge',
  templateUrl: './test-toe-edge.page.html',
  styleUrls: ['./test-toe-edge.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class TestToeEdgePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

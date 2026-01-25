import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/components/header/header.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    HeaderComponent
  ],
})
export class HomePage {
  constructor() {}
}

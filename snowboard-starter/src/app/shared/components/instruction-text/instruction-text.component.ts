import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IonText, IonItem } from '@ionic/angular/standalone';

@Component({
  selector: 'app-instruction-text',
  templateUrl: './instruction-text.component.html',
  styleUrls: ['./instruction-text.component.scss'],
  standalone: true,
  imports: [
    IonItem,
    IonText
  ]
})
export class InstructionTextComponent {
  @Input() instructionText!: string;
  @Input() disabled: boolean = false;
  @Output() instructionClick = new EventEmitter<void>();

  onClick() {
    if(this.disabled) return;
    this.instructionClick.emit();
  }
}

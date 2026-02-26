<u>Objectives</u>:
- Turn instruction text into items that unlock the next instruction text
- Show the current instruction text
	- Only show the next instruction text when the current one is checked 

<u>Process</u>:
- Import the full list of instruction text
- Utilize an array for that holds sequential strings
- When the current `ion-item` is pressed, <u>disable its ability to trigger functions</u> and add the next instruction text to the utility array
- Check if there is a next element, if there isnt, use a toast to inform the user there is no more instructions, maybe disable the button?

<u>Initialize utility array and create a function to add to the utility array</u>:
```ts
// instruction.page.ts
...
export class StandingUpPage {
  // Initialize the utility array with the first instruction text
  lessonInstructions: string[] = [standingUpLesson[0]];

  currentIndex: number = 1;

  addInstructionText = () => {
    if (this.currentIndex <= standingUpLesson.length - 1) {
      this.lessonInstructions.push(standingUpLesson[this.currentIndex]);
    }
    this.currentIndex += 1;
  }
}
```

<u>Emit the function call from the child component and conditionally disable the child button</u>:
```ts
// instruction-text.component.ts
export class InstructionTextComponent {
  ...
  @Input() disabled: boolean = false;
  @Output() instructionClick = new EventEmitter<void>();

  onClick() {
    if(this.disabled) return;
    this.instructionClick.emit();
  }
}
```

```html
<ion-item
  button="true"
  [disabled]="disabled"
  (click)="onClick()">
  <ion-text>{{ instructionText }}</ion-text>
</ion-item>
```

<u>Properly call the instruction text component in the lesson page</u>:
```html
<!--lesson.page.html-->
@for(item of lessonInstructions; track item) {
	<app-instruction-text
	    [disabled]="isButtonDisabled(item)"
		(instructionClick)="addInstructionText()"
        [instructionText]="item">
    </app-instruction-text>
}
```
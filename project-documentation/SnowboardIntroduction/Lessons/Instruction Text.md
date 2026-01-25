<u>Objectives</u>:
- Create a shared component for lesson instruction text
- Ensure the formatting of the instruction text across the application is consistent

<u>Process</u>:
<u>Utilize text above and beside gifs and images to instruct users</u>:
```ts
// lesson.page.ts
import {
	IonText,
	...,
} from '@ionic/angular/standalone';
import { ..., Input } from '@angular/core';
...

@Component({
	imports: [
		IonText
	],
})
export class InstructionTextComponent {
  @Input() instructionText!: string;
}
```

```html
<!--lesson.page.ts-->
<ion-text>{{instructionText}}</ion-text>
```

<u>Store instructions in a separate file</u>:
```ts
export const standingUpLesson = [
    "Put your lead foot in your lead foot binding and keep the tail foot out of the tail foot binding",...,
]
```

<u>Import the string array into lesson component</u>:
```ts
// lesson.page.ts
import { standingUpLesson } from 'src/assets/data/lessons/beginner-lessons';

export class StandingUpPage {
  lessonInstructions: string[] = standingUpLesson;
}
```

<u>Iterate over the string array and display the instruction text</u>:
```html
<!--lesson.page.html-->
@for(item of lessonInstructions; track item) {
	<app-instruction-text
		instructionText={{item}}>
	</app-instruction-text>
}
```

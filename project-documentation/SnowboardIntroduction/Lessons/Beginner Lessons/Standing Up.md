<u>Objectives</u>:
- Provide users with a series of instructions on how to stand up for the first time
- Provide users with drills they can practice on and off the snowboard

<u>Process</u>:
<u>Utilize text above and beside gifs and images to instruct users</u>:
```ts
// lesson.page.ts
import {
	IonText,
	...,
} from '@ionic/angular/standalone';
...

@Component({
	imports: [
		IonText
	],
})
```

```html
<!--lesson.page.ts-->
<ion-text>{instructionX}</ion-text>
```

Probably use a shared component for text, so all text is formatted the same

<u>Provide a route back to home page</u>:
```ts
// standing-up.page.ts
// import requirements for home icon
import {
  IonButtons,
  IonButton,
  IonIcon,
  ...,
} from '@ionic/angular/standalone';
...
import { addIcons } from 'ionicons';
import { home } from 'ionicons/icons';

@Component({
	...,
	imports: [
		IonButtons,
		IonButton,
		IonIcon,
	],
})

export class StandingUp {
  constructor () {
    addIcons({ home });
  }
  ...
}
```
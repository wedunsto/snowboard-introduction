<u>Objectives</u>:
Provide an easy to navigate menu for users to get the lessons the want

<u>Process</u>:
<u>Build an accordion menu</u>:
```ts
// Import the requred components
import {
	IonAccordion,
	IonAccordionGroup,
	IonItem,
	IonLabel,
	...,
} from '@ionic/angular/standalone';

@Component({
	...,
	imports: [
		IonAccordion,
		IonAccordionGroup,
		IonItem,
		IonLabel,
	],
})
```

```html
<!--Build the accordion group of items-->
<ion-accordion-group>
  <ion-accordion value="first">
    <ion-item slot="header" color="light">
      <ion-label>Beginner Skills</ion-label>
    </ion-item>
    <!--List of links to skills-->
   <!--<div class="ion-padding" slot="content">First Content</div>-->
  </ion-accordion>
  <ion-accordion value="second">
    <ion-item slot="header" color="light">
      <ion-label>Intermediate Skills</ion-label>
    </ion-item>
    <!--List of links to skills-->
    <!--<div class="ion-padding" slot="content">Second Content</div>-->
  </ion-accordion>
  <ion-accordion value="third">
    <ion-item slot="header" color="light">
      <ion-label>Advanced Skills</ion-label>
    </ion-item>
    <!--List of links to skills-->
    <!--<div class="ion-padding" slot="content">Third Content</div>-->
  </ion-accordion>
</ion-accordion-group>
```
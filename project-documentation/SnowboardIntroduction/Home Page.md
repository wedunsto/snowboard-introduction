<u>Objective</u>: Provide users with a landing page informing them what the application is and what its used for

<u>TODO</u>: Add new features to track snowboarding progress and web features

<u>Process</u>:
<u>Place a hamburger menu in the top right of the persistent header</u>:
```ts
// Import the required components
import {
	IonButtons,
	IonMenu,
	IonMenuButton,
	...,
} from '@ionic/angular/standalone';

@Component({
	...,
	imports: [
		IonButtons,
		IonMenu,
		IonMenuButton,
		...,
	]
})
```

```html
<!--Build the side menu-->
<ion-menu contentId="main-content">
  <ion-header>
    <ion-toolbar>
      <ion-title>Topics</ion-title>
    </ion-toolbar>
  </ion-header>
  <!--
	  Content of the hamburger menu. This will be the accordion menus
	  <ion-content class="ion-padding">This is the menu content.</ion-content>
  -->
</ion-menu>

<!--Build the menu button-->
<div class="ion-page" id="main-content">
  <ion-header>
    <ion-toolbar>
      <ion-buttons slot="end">
        <ion-menu-button></ion-menu-button>
      </ion-buttons>
      <ion-title>Snowboard Starter</ion-title>
    </ion-toolbar>
  </ion-header>
</div>
```
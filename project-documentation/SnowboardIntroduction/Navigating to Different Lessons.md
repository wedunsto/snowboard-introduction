<u>Objectives</u>:
When a user clicks on a lesson from the hamburger menu / accordion menu, navigate to the respective page

<u>Process</u>:
<u>Utilize the routerLink property</u>:
```ts
// home.page.ts
// Import the required component
import { RouterModule } from '@angular/router';
...

@Component({
	...,
	imports:[
	RouterModule,
	...,
	],
})
```

```html
<!--home.page.html-->
<!--Route to a destination in the app.routes.ts-->
<ion-item [routerLink]="['/standing-up']" routerDirection="forward">
	<ion-label>Standing Up</ion-label>
</ion-item>
```

<u>Ensure app.component.html has the ion-router-outlet</u>:
```html
<!--app.component.html-->
<ion-app>
  <ion-router-outlet></ion-router-outlet>
</ion-app>
```
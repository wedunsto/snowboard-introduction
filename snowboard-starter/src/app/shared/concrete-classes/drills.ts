import {
   AbstractControl,
   FormBuilder,
   ValidationErrors,
   Validators,
} from "@angular/forms";
import { Lesson } from "./lessson";
import { Directive, OnInit } from "@angular/core";

@Directive({ selector: 'app-drill' })
export class Drill extends Lesson implements OnInit {
   constructor(private fb: FormBuilder) {
      super();
   }

   drillForm !: ReturnType<FormBuilder['group']>;

   ngOnInit() {
      // Create the form when the component initializes
      this.drillForm = this.fb.group({
         reps: [0, [Validators.required, this.drillDurationAndRepValidation]],
         duration: [0, [Validators.required, this.drillDurationAndRepValidation]]
      })
   }

   drillDurationAndRepValidation = (control:AbstractControl): ValidationErrors | null => {
      const repOrDrill = control.value ?? 0;

      const errors: ValidationErrors = {};

      if(repOrDrill <= 0) {
         errors['tooLow'] = true;
      }

      if(!/^\d+$/.test(repOrDrill)) {
         errors['notANumber'] = true;
      }

      return Object.keys(errors).length ? errors : null;
   }
}
import { addInstructionText, isButtonDisabled } from 'src/app/shared/helper-functions/lesson-helper-functions';

export class Lesson {
    completeLessonInstructions: string[] = [];

    lessonInstructions!: string[];

    currentIndex: number = 1;

      addInstructionText() {
        this.currentIndex = addInstructionText(
          this.currentIndex,
          this.completeLessonInstructions,
          this.lessonInstructions
        );
      }
    
      isButtonDisabled(instructionText: string) {
        return isButtonDisabled(
          this.currentIndex,
          instructionText,
          this.completeLessonInstructions
        );
      }
}
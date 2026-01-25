// If there is another instruction text, add it to the utility array
export const addInstructionText = (
    currentIndex: number,
    lessons: string[],
    lessonInstructions: string[]): number => {
        if (currentIndex <= lessons.length - 1) {
            lessonInstructions.push(lessons[currentIndex]);
        }
        return currentIndex += 1;
}

// Determine if an instruction text button is disabled
export const isButtonDisabled = (
    currentIndex: number,
    instructionText: string,
    lessons: string[]): boolean => {
        if (currentIndex >= lessons.length - 1) {
            return true;
        }
        return instructionText !== lessons[currentIndex - 1];
}
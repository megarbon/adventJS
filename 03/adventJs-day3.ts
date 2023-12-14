function findNaughtyStep(original, modified) {
  let maxLength: number = Math.max(original.length, modified.length);

  for (let j = 0; j < maxLength; j++) {
    if (original[j] !== modified[j]) {
      return original.length > modified.length ? original[j] : modified[j];
    }
  }

  return ""; // Si no hay diferencias
}

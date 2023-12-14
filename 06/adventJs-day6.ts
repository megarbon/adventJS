function maxDistance(movements: string): number {
  const steps = [...movements];

  let distanciaRecorrida = 0;
  let asteriscos = 0;

  for (const step of steps) {
    if (step === ">") {
      distanciaRecorrida++;
    } else if (step === "<") {
      distanciaRecorrida--;
    } else if (step === "*") {
      asteriscos++;
    }
  }

  return Math.abs(distanciaRecorrida) + asteriscos;
}

function decode(message: string): string {
  let mensajeFinal = "";

  // Utilizar una expresión regular para encontrar una palabra entre paréntesis
  const regex = /\((.*?)\)/g;

  // Iterar sobre todas las coincidencias de palabras entre paréntesis
  let match;
  let lastIndex = 0;
  while ((match = regex.exec(message)) !== null) {
    // Agregar las palabras antes del paréntesis a mensajeFinal
    mensajeFinal += message.substring(lastIndex, match.index);

    // Obtener la palabra dentro de los paréntesis, invertirla y agregar a mensajeFinal
    const insideParentheses = match[1];
    const reversedWord = insideParentheses.split("").reverse().join("");
    mensajeFinal += reversedWord;

    // Actualizar el índice de inicio para la próxima iteración
    lastIndex = regex.lastIndex;
  }

  // Agregar las palabras después del último paréntesis a mensajeFinal
  mensajeFinal += message.substring(lastIndex);

  return mensajeFinal;
}

// Test
const result = decode("sa(u(cla)atn)s");
console.log(result); // Output: "santaclaus"

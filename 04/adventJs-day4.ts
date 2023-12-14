function decode(message: string): string {
  let mensajeFinal = "";
  // Separar las palabras del mensaje por los espacios y guardar en un array
  let mensaje = message.split(" ");

  // Recorrer el array y si hay un paréntesis, invertir el orden de las palabras dentro del paréntesis
  mensaje.forEach((palabra: string) => {
    if (palabra.charAt(0) === "(") {
      let indexFin = palabra.indexOf(")");
      //eliminar el caracter de inicio y final del paréntesis
      let cleanWord = palabra.substring(1, indexFin);

      // Invertir la cadena y agregar al mensaje final
      mensajeFinal += cleanWord.split("").reverse().join("") + " ";
    } else {
      mensajeFinal += palabra + " "; // Agregar la palabra al mensaje final si no empieza por paréntesis
    }
  });

  return mensajeFinal.trim(); // Eliminar el espacio en blanco adicional al final del mensaje
}

/*
Test: decode('sa(u(cla)atn)s')

Expected:
"santaclaus"

Actual:
"sa(u(cla)atn)s"
*/

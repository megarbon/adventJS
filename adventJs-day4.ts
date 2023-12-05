/*
In 🎅 Santa's workshop, some Christmas messages have been written in a peculiar way: the words within the brackets must be read backwards.

Santa needs these messages to be correctly formatted. Your task is to write a function that takes a string and reverses the characters within each pair of parentheses, removing the parentheses as well.

However, bear in mind that there may be nested parentheses, so you should reverse the characters in the correct order.

const a = decode('hola (odnum)')
console.log(a) // hola mundo

const b = decode('(olleh) (dlrow)!')
console.log(b) // hello world!

const c = decode('sa(u(cla)atn)s')
console.log(c) // santaclaus

// Step by step:
// 1. Reverse the nested -> sa(ualcatn)s
// 2. Reverse the remaining one -> santaclaus
Notes:

The input strings will always be well formed with parentheses that match correctly, you do not need to validate them.
There should not be any parentheses left in the final message.
The maximum nesting level is 2.
*/

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

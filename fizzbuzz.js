
//Este ejercicio consiste en imprimir los números del 1 al 20, pero con las siguientes condiciones:
// - Si el número es múltiplo de 3, imprimir "Fizz" en lugar del número.
// - Si el número es múltiplo de 5, imprimir "Buzz" en lugar del número.
// - Si el número es múltiplo de 3 y 5, imprimir "FizzBuzz" en lugar del número.
// - Si no es múltiplo de ninguno, imprimir el número.

//Esta version utiliza el operador ternario para simplificar el código y evitar el uso de if-else.
for (let i = 1; i <= 20; i++) {
  let output = "";
  output += (i % 3 === 0) ? "Fizz" : "";
  output += (i % 5 === 0) ? "Buzz" : "";
  console.log(output || i);
}


//Esta version utiliza condicionales if-else para resolver el problema de manera más tradicional.
//Esta version imprime los números del 1 al 15, pero con las siguientes condiciones:
for (let i = 25; i <= 35; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}


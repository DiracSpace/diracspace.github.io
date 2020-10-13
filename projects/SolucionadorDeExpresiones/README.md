# Evaluador de Expresiones Matemáticas
Autor: Jayson roberto De León Martínez

Demostración aquí - `https://youtu.be/pMZilcJkb3U`

Demostración en vivo aquí - `https://diracspace.github.io/projects/SolucionadorDeExpresiones/index.html`

# ¿Qué hace este programa?

Este programa hecho en JavaScript toma una entrada de texto, la cual elimina los espacios en blanco entre los valores y al principio/final. Hecho eso, después lo envía a una función donde cambiará el orden de los valores usando mí interpretación del [https://en.wikipedia.org/wiki/Shunting-yard_algorithm](Shunting Yard Algorithm) para obtener la versión Posfija de la expresión escrita en Infijo devolviendo una cadena de texto tipo [https://en.wikipedia.org/wiki/Reverse_Polish_notation](Reverse Polish Notation). Después, toma esa cadena en RPN y la convierte en un array haciendo uso de la función `Array.from()` de JavaScript. Sin embargo, dicha función convierte los números a String por lo cual usé un tipo lambda para iterar los valores del array y con un comparador devolví la versión numérica (int) de sólo los números y no los operadores. Finalmente hago uso de mi función `postfixSolver();` para poder llevar a cabo la interpretación matemática de la cadena de texto, lo cual me devuele el stack e imprimo el único valor adentro (la respuesta).

[https://github.com/DiracSpace/diracspace.github.io/blob/4650ff556bb9c9c15cf6b51618bba9295f589d68/projects/SolucionadorDeExpresiones/index.js#L28](Código de JavaScript)

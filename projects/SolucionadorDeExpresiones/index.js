/**
 * 
 * Autor: Jayson roberto De León Martínez 
 * 
 * JavaScript program for solving algorithmic expressions
 * 
 * Algoritmo:
 * - Siempre que un entero / carácter provenga de una expresión, lo agregamos al sufijo String
 * - Siempre que entra un operador, verificamos la precedencia del operador entrante con el
 * operador en la parte superior de la pila si la pila no es nula
 * - Si la precedencia del operador entrante es menor o igual que el operador en la parte superior de
 * la pila: coloca el operador en la pila y verifica la precedencia nuevamente hasta que el operador
 * es mayor que el del operador en la pila (excepto si el operador es '^', que tiene la precedencia más alta y
 * es asociativo a la derecha)
 * - Agrega el operador emergente a la cadena postFix
 * - Si no quedan expresiones en la pila, extraiga todos los operadores y añádalos a la cadena
*/

function isEmpty(a) { return (a.length < 1) ? false : true; }
function peek(a) { return (a[a.length - 1]); }
function precedence(a) {
    if (a === '+' || a === '-') { return 1; }
    if (a === '*' || a === '/') { return 2; }
    if (a === '(' || a === ')') { return 3; }
    return -1;
}

function infix_to_postfix(a) {
    let s = []; let input = a; let output = "";
    for (let i = 0; i < input.length; i++) {
        let ch = input.charAt(i);
        if (ch !== ')' && ch !== '(' && ch !== '+' && ch !== '-' && ch !== '*' && ch !== '/') {
            output = output + ch;
        } else if (ch == ')') {
            while (peek(s) != '(') { output += s.pop(); }
            s.pop();
        } else {
            while (isEmpty(s) === true) {
                if (peek(s) == '(' || precedence(peek(s)) < precedence(ch)) { break; }
                output += s.pop();
            }
            s.push(ch);
        }
    }
    while (isEmpty(s) === true) { output += s.pop(); }
    return output;
}

function postfixSolver(input) {
    const operators = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b
    }

    stack = [];
    input.forEach(value => { stack.push(value in operators ? operators[value](...stack.splice(-2)) : value); });
    return stack;
}

function prepareData() {
    let infixNotationEquation = document.getElementById('equation').value;

    var postfixNotationStack = Array.from(infix_to_postfix(infixNotationEquation.split(" ").join("")));
    var final = postfixNotationStack.map(function (x) { 
        return (isNaN(x)) ? x : parseInt(x, 10);
    });

    // here we output the data
    let result = postfixSolver(final);
    document.getElementById("originalEquation").innerHTML = infixNotationEquation;
    console.log("The equation is: " + infixNotationEquation);
    document.getElementById("solutionToEquation").innerHTML = result;
    console.log("El resultado es: " + result);
}
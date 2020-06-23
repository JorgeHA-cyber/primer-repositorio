function suma (nroA, nroB) {
    return nroA + nroB;
};

function resta (nroA, nroB) {
    return nroA - nroB;
};

function multiplicacion (nroA, nroB)  {
    return nroA * nroB;
};

function calculadora (A, B, operacion) {
    return operacion (A, B);
}

console.log(calculadora(2, 2, multiplicacion));

console.log(calculadora(2, 2, resta));


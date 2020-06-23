function reemplazaFastFast(texto,palabraA,palabraB) {
     return texto.replace(palabraA,palabraB);
};
let frase = 'Boca juega bien.';
console.log(frase);
let frasenueva = reemplazaFastFast(frase,'Boca','River');
console.log('No! ' + frasenueva);


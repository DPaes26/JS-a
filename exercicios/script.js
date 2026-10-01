function mostrarDataHora() {
    let data = new Date();
    console.log(data.toLocaleString());
}
// mostrarDataHora()

function imprimirTabuada(numero = 0) {
    for (let i = 0; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}
// imprimirTabuada(3)

function verificarIntervalo(numero = 0) {
    if (numero >= 10 && numero <= 50) {
        console.log("Numero dentro do intervalo");
    } else {
        console.log(`${numero} não está no intervalo`);
    }

}
// verificarIntervalo(55)

function quadradro(numero) {
    return numero * numero;
}
console.log(quadradro(2))

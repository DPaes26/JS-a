
// exercício 3
let num1 = 10;
let num2 = 5;

if(num1 > num2){
    console.log("O número " + num1 + " é maior que " + num2); 
}else if(num1 < num2){
    console.log(`O número ${num1}` + ` é menor que o ${num2}` );
}else if(num1 == num2){
    console.log("Os números são iguais");
}

//exercício 4
let num3 = 25;

if(num3 % 2 == 0){
    console.log(`O ${num3}é Par`);
}else{
    console.log(`O número ${num3} é impar`);
}

//exercício 5
let notaA = 10;
let notaB = 8;
let notaC = 7;
let media = (notaA + notaB + notaC) / 3;
console.log(`A nota do aluno é: ${media.toFixed(1)}`);

if(media >=7){
    console.log("Aluno aprovado");
    
}else if(media < 7 && media >= 5 ){
    console.log("Está em recuperação");
    
}else{
    console.log("Reprovado");
}

//Exercício 6

// let valor = 100;
// let desconto = 10;
// let porcentagem = (valor * 10) / 100

// if(valor >=100){
//     console.log();
    
// }

//exercício 10
let numero = 25;

if(numero >= 10 && numero <= 50){
    console.log("Está no intervalor de 10 a 50");
}else{
    console.log("Está fora do intervalo"); 
}





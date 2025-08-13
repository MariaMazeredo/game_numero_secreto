//Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

function calcularIMC(altura, peso){
    let imc= peso / altura**2
    return imc
} 
//Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.

function calculaFatorial(numero){
    let fatorial =1;
    for(let i=numero; i>1; i--){
        fatorial *=i

    }

}
//Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.

function converterParaReal(valorDolar){ 
valorDolar = valorDolar*4.80
return valorDolar
}

//Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.

function areaPerimetro(altura, largura){
    let area = altura * largura
    let perimetro = 2*(altura + largura)
    return `A área é ${area} e o perímetro é ${perimetro}`
}
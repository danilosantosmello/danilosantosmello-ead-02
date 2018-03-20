function calculadora(){
    var valor1 = parseInt(prompt('Informe um valo: '));
    var valor2 = parseInt(prompt('Informe outro valor: '));
    var soma = valor1 + valor2;
    var sub = valor1 - valor2;
    var mult = valor1 * valor2;
    var div = valor1 / valor2;

    alert('A soma é dos valores é: ' + soma + '\n' +
'A subtração dos numeros é: ' + sub + '\n' +
'A multiplicação dos numeros é: ' + mult +'\n' +
'A divisão dos nummeros é: ' + div) + '\n'
}
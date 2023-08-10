var n1 =  document.getElementById('primeiroNumero');
var n2 = document.getElementById('segundoNumero');
var result = document.getElementById('resultado');

var btnSomar = document.getElementById('btnSomar');
btnSomar.addEventListener('click', somar);

var btnSubtrair = document.getElementById('btnSubtrair');
btnSubtrair.addEventListener('click', subtrair);

var btnDividir = document.getElementById('btnDividir');
btnDividir.addEventListener('click', dividir);

var btnMultiplicar = document.getElementById('btnMultiplicar');
btnMultiplicar.addEventListener('click', multiplicar);

var btnLimpar = document.getElementById('btnLimpar');
btnLimpar.addEventListener('click', limpar);

function somar() {
    var num1 = parseFloat(n1.value);
    var num2 = parseFloat(n2.value);
    var resultado = num1 + num2;
    result.innerText = "A soma é: " + resultado;
}

function subtrair() {
    var num1 = parseFloat(n1.value);
    var num2 = parseFloat(n2.value);
    var resultado = num1 - num2;
    result.innerText = "A subtração é: " + resultado;
}

function dividir() {
    var num1 = parseFloat(n1.value);
    var num2 = parseFloat(n2.value);
    var resultado = num1 / num2;
    result.innerText = "A divisão é: " + resultado;
}

function multiplicar() {
    var num1 = parseFloat(n1.value);
    var num2 = parseFloat(n2.value);
    var resultado = num1 * num2;
    result.innerText = "A multiplicação é: " + resultado;
}

function limpar(){
    document.getElementById('primeiroNumero').value = "0";
    document.getElementById('segundoNumero').value = "0";
}
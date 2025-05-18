//SALDO
let saldo = 3000;

alert('Testando compilação do TS');
const elementoSaldo = document.querySelector(".saldo-valor .valor") as HTMLElement;
if(elementoSaldo != null){
    elementoSaldo.textContent = saldo.toString();
}
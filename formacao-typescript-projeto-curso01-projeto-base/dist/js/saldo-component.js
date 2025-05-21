//SALDO
let saldo = 3000;
const elementoSaldo = document.querySelector(".saldo-valor .valor");
const elementoDataAcesso = document.querySelector(".block-saldo time");
if (elementoSaldo != null) {
    elementoSaldo.textContent = formatarMoeda(saldo); //Chamando função para exibir saldo em formato de moeda
}
if (elementoSaldo != null) {
    const dataAcesso = new Date(); // Exibir data atual
    elementoDataAcesso.textContent = formatarData(dataAcesso);
}

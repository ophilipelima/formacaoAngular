//SALDO
let saldo: number = 3000;

const elementoSaldo = document.querySelector(".saldo-valor .valor") as HTMLElement;
const elementoDataAcesso = document.querySelector(".block-saldo time") as HTMLElement;

if(elementoSaldo != null){
    elementoSaldo.textContent = formatarMoeda(saldo) //Chamando função para exibir saldo em formato de moeda
}

if(elementoSaldo != null){
    const dataAcesso: Date = new Date(); // Exibir data atual
    elementoDataAcesso.textContent = formatarData(dataAcesso);
}

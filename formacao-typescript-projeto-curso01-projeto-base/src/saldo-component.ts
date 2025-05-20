//SALDO
let saldo: number = 3000;

const elementoSaldo = document.querySelector(".saldo-valor .valor") as HTMLElement;
const elementoDataAcesso = document.querySelector(".block-saldo time") as HTMLElement;

if(elementoSaldo != null){
    elementoSaldo.textContent = saldo.toLocaleString("pt-br", { currency: "BRL", style: "currency"}); //Exibir saldo em formato de moeda
}

if(elementoSaldo != null){
    const dataAcesso: Date = new Date(); // Exibir data atual
    elementoDataAcesso.textContent = dataAcesso.toLocaleDateString("pt-br", {
        weekday: "long",
        day: "2-digit", 
        month: "2-digit",
        year: "numeric"
    });
}

//SALDO
let saldo = 3000;

alert('Testando compilação do TS');
const elementoSaldo = document.querySelector(".saldo-valor .valor") as HTMLElement;
if(elementoSaldo != null){
    elementoSaldo.textContent = saldo.toString();
}

const elementoFormulario = document.querySelector(".block-nova-transacao form") as HTMLFormElement;
elementoFormulario.addEventListener("submit", function(event){
    event.preventDefault(); //Coletar as informações e atualizar a página automaticamente
    if(!elementoFormulario.checkValidity()){
        alert("Por favor, preencha todos os campos da transação");
        return;
    }

    const inpuTipoTransacao = elementoFormulario.querySelector("#tipoTransacao") as HTMLSelectElement;
    const inputValor = elementoFormulario.querySelector("#valor") as HTMLInputElement;
    const inputData = elementoFormulario.querySelector("#data") as HTMLInputElement;

    let tipoTransacao: string = inpuTipoTransacao.value;
    let valor: number = inputValor.valueAsNumber;
    let data: Date = new Date (inputData.value);

    if(tipoTransacao == "Depósito"){
        saldo += valor;
    }else if(tipoTransacao == "Transferência" || tipoTransacao == "Pagamento de Boleto"){
        saldo -= valor;
    }else{
        alert("Transação inválida");
        return;
    }

    elementoSaldo.textContent = saldo.toString();

    const novaTransacao = {
        tipoTransacao : tipoTransacao,
        valor : valor,
        data : data
    }
    console.log(novaTransacao)
    elementoFormulario.reset();
});




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

    let tipoTransacao: TipoTransacao = inpuTipoTransacao.value as TipoTransacao;
    let valor: number = inputValor.valueAsNumber;
    let data: Date = new Date (inputData.value);

    if(tipoTransacao == TipoTransacao.DEPOSITO){
        saldo += valor;
    }else if(tipoTransacao == TipoTransacao.TRANSFERENCIA || tipoTransacao == TipoTransacao.PAGAMENTO_BOLETO){
        if(saldo < valor){
            alert("Transação NEGADA - Saldo insuficiente");
        }else{
            saldo -= valor;
        }
    }else{
        alert("Transação inválida");
        return;
    }

    elementoSaldo.textContent = saldo.toLocaleString("pt-br", {currency: "BRL", style: "currency"}); //Exibir saldo em formato de moeda ao realizar a transaçaõ

    const novaTransacao = {
        tipoTransacao : tipoTransacao,
        valor : valor,
        data : data
    }
    console.log(novaTransacao)
    elementoFormulario.reset();
});
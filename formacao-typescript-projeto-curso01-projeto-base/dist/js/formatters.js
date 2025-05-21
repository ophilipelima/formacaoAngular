function formatarMoeda(valor) {
    return valor.toLocaleString("pt-br", { currency: "BRL", style: "currency" });
}
function formatarData(dataAcesso, formato = FormatoData.PADRAO) {
    if (formato === FormatoData.DIA_SEMANA_DIA_MES_ANO) {
        return dataAcesso.toLocaleDateString("pt-br", {
            weekday: "long",
            day: "2-digit",
            month: "2-digit",
            year: "numeric"
        });
    }
    else if (formato === FormatoData.DIA_MES) {
        return dataAcesso.toLocaleDateString("pt-br", { day: "2-digit", month: "2-digit" });
    }
    return dataAcesso.toLocaleDateString("pt-br");
}

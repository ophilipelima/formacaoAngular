import { Transacao } from "./Transacao";

export type GrupoTransacao = {
    label: string; //Uma string que representa o rótulo do grupo (ex: "Setembro/2023").
    transacoes: Transacao[];//Um array de objetos do tipo Transacao, representando as transações que pertencem a este grupo.
}
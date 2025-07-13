export class Armazenador{ //Classe responsável por salvar e recuperar dados do local Storage
    constructor(){ }

    static salvar(chave: string, valor: any): void{
        const valorComoString = JSON.stringify(valor);
        localStorage.setItem(chave, valorComoString);
    }

    static obter<T>(chave: string, reviver?: (this: any, key: string, value: any) => any): T | null{ //Parâmetro opcional, o ? indica isso -- O uso do "<T>" indica que a função aceitará um tipo genérico 
    // -isso permite que ao chamar a função, vc especifique qual tipo deseja que ela retorne;
    //  -- T | null -> ou retorna o Tipo que enviamos ou retorna nada;
        const valor = localStorage.getItem(chave);

        if(valor === null){
            return null;
        }

        if(reviver){
            return JSON.parse(valor, reviver) as T;
        }

        return JSON.parse(valor) as T;
    }
}
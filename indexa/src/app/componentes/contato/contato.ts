export interface Contato {
    id: number;
    nome: string;
    avatar: string | ArrayBuffer
    telefone: string;
    email: string;
    aniversario?: string;   ////? quando a propriedade não for obrigatória
    redes?: string;
    observacoe?: string;

}


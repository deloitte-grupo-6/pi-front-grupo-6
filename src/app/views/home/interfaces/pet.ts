import { User } from "./user";

export class Pet {

    id: string;
    nome: string;
    doador: User;
    especie: string;
    raca: string;
    sexo: string;
    dataNascimento: Date;
    descricao: string;
    imagemUrl: string;

}
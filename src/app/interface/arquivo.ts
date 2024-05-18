import { Usuario } from "./usuario";
import { Local } from "./local";
import { Projeto } from "./projeto";
import { Etapa } from "./etapa";


export interface Arquivo{
    arquivo_id: string;
    usuario: Usuario;
    arquivo_descricao?: string;
    arquivo_data?: Date;
    arquivo_versao?: Number;
    arquivo_link?: string;
    arquivo_extensao?: string;
    arquivo_status?: number
    local: Local;
    projeto: Projeto;
    etapa: Etapa;
    arquivo_id_pai: string;

}
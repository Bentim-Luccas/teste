export interface Projeto {
    empresa_id: number; 
    projeto_descricao?: string;
    projeto_data_inicio?: Date;
    projeto_data_fim?: Date;
    projeto_orcamento?: number;
    disciplina_status?: number;
}
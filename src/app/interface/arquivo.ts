export interface Arquivo {
  arquivo_id:        string;
  usuario_id:        number;
  arquivo_descricao: string | null;
  arquivo_data:      string | null;
  arquivo_versao:    number | null;
  arquivo_link:      string | null;
  local_id:          number | null;
  projeto_id:        number | null;
  etapa_id:          number | null;
  arquivo_id_pai:    string | null;

  // Mockado
  mostrarDetalhes?: boolean;
}

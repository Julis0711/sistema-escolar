import ListaProfessores from "../components/ListaProfessores";
import MensagemErro from "../components/MensagemErro";

function PaginaListagemProfessores({ professores, aoExcluir, erro }) {
  return (
    <section className="pagina">
      <h2>Professores</h2>
      <MensagemErro mensagem={erro} />
      <ListaProfessores professores={professores} aoExcluir={aoExcluir} />
    </section>
  );
}

export default PaginaListagemProfessores;

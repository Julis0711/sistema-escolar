import ListaAlunos from "../components/ListaAlunos";
import MensagemErro from "../components/MensagemErro";

function PaginaListagem({ alunos, aoExcluir, erro }) {
  return (
    <section className="pagina">
      <h2>Alunos</h2>
      <MensagemErro mensagem={erro} />
      <ListaAlunos alunos={alunos} aoExcluir={aoExcluir} />
    </section>
  );
}

export default PaginaListagem;

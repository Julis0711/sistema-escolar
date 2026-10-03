import FormularioAluno from "../components/FormularioAluno";
import MensagemErro from "../components/MensagemErro";

function PaginaCadastro({ aoSalvar, erro }) {
  return (
    <section className="pagina">
      <h2>Cadastrar Aluno</h2>
      <MensagemErro mensagem={erro} />
      <FormularioAluno aoSalvar={aoSalvar} />
    </section>
  );
}

export default PaginaCadastro;

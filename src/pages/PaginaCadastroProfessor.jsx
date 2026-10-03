import FormularioProfessor from "../components/FormularioProfessor";
import MensagemErro from "../components/MensagemErro";

function PaginaCadastroProfessor({ aoSalvar, erro }) {
  return (
    <section className="pagina">
      <h2>Cadastrar Professor</h2>
      <MensagemErro mensagem={erro} />
      <FormularioProfessor aoSalvar={aoSalvar} />
    </section>
  );
}

export default PaginaCadastroProfessor;

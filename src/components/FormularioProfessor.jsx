import { useState } from "react";
import CampoTexto from "./CampoTexto";

const inicial = { nome: "", email: "", cpf: "", disciplina: "", data_admissao: "" };

function FormularioProfessor({ aoSalvar }) {
  const [professor, setProfessor] = useState(inicial);

  function alterar(e) {
    setProfessor({ ...professor, [e.target.name]: e.target.value });
  }

  function enviar(e) {
    e.preventDefault();
    aoSalvar(professor);
    setProfessor(inicial);
  }

  return (
    <form className="formulario" onSubmit={enviar}>
      <CampoTexto label="Nome" nome="nome" valor={professor.nome} aoAlterar={alterar} />
      <CampoTexto label="Email" nome="email" tipo="email" valor={professor.email} aoAlterar={alterar} />
      <CampoTexto label="CPF" nome="cpf" valor={professor.cpf} aoAlterar={alterar} />
      <CampoTexto label="Disciplina" nome="disciplina" valor={professor.disciplina} aoAlterar={alterar} />
      <CampoTexto label="Data de admissão" nome="data_admissao" tipo="date" valor={professor.data_admissao} aoAlterar={alterar} />
      <button type="submit">Cadastrar</button>
    </form>
  );
}

export default FormularioProfessor;

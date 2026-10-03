import { useState } from "react";
import CampoTexto from "./CampoTexto";

const inicial = { nome: "", email: "", cpf: "", matricula: "", data_nascimento: "" };

function FormularioAluno({ aoSalvar }) {
  const [aluno, setAluno] = useState(inicial);

  function alterar(e) {
    setAluno({ ...aluno, [e.target.name]: e.target.value });
  }

  function enviar(e) {
    e.preventDefault();
    aoSalvar(aluno);
    setAluno(inicial);
  }

  return (
    <form className="formulario" onSubmit={enviar}>
      <CampoTexto label="Nome" nome="nome" valor={aluno.nome} aoAlterar={alterar} />
      <CampoTexto label="Email" nome="email" tipo="email" valor={aluno.email} aoAlterar={alterar} />
      <CampoTexto label="CPF" nome="cpf" valor={aluno.cpf} aoAlterar={alterar} />
      <CampoTexto label="Matrícula" nome="matricula" valor={aluno.matricula} aoAlterar={alterar} />
      <CampoTexto label="Data de nascimento" nome="data_nascimento" tipo="date" valor={aluno.data_nascimento} aoAlterar={alterar} />
      <button type="submit">Cadastrar</button>
    </form>
  );
}

export default FormularioAluno;

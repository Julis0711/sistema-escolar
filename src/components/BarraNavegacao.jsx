import { Link } from "react-router-dom";

function BarraNavegacao() {
  return (
    <nav className="barra">
      <h1>Sistema Escolar</h1>
      <ul>
        <li><Link to="/">Início</Link></li>
        <li><Link to="/alunos">Alunos</Link></li>
        <li><Link to="/cadastro">Cadastrar Aluno</Link></li>
        <li><Link to="/professores">Professores</Link></li>
        <li><Link to="/cadastro-professor">Cadastrar Professor</Link></li>
      </ul>
    </nav>
  );
}

export default BarraNavegacao;

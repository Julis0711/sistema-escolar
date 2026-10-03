import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import BarraNavegacao from "./components/BarraNavegacao";
import PaginaInicial from "./pages/PaginaInicial";
import PaginaListagem from "./pages/PaginaListagem";
import PaginaCadastro from "./pages/PaginaCadastro";
import PaginaListagemProfessores from "./pages/PaginaListagemProfessores";
import PaginaCadastroProfessor from "./pages/PaginaCadastroProfessor";
import { listarAlunos, criarAluno, excluirAluno } from "./services/alunoService";
import { listarProfessores, criarProfessor, excluirProfessor } from "./services/professorService";
import "./App.css";

function App() {
  const [alunos, setAlunos] = useState([]);
  const [professores, setProfessores] = useState([]);
  const [erro, setErro] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    carregarAlunos();
    carregarProfessores();
  }, []);

  async function carregarAlunos() {
    try {
      const dados = await listarAlunos();
      setAlunos(dados);
    } catch {
      setErro("Não foi possível carregar os alunos.");
    }
  }

  async function carregarProfessores() {
    try {
      const dados = await listarProfessores();
      setProfessores(dados);
    } catch {
      setErro("Não foi possível carregar os professores.");
    }
  }

  async function handleSalvarAluno(aluno) {
    try {
      const novo = await criarAluno(aluno);
      setAlunos([...alunos, novo]);
      setErro("");
      navigate("/alunos");
    } catch {
      setErro("Erro ao cadastrar aluno.");
    }
  }

  async function handleExcluirAluno(id) {
    try {
      await excluirAluno(id);
      setAlunos(alunos.filter((a) => a.id !== id));
    } catch {
      setErro("Erro ao excluir aluno.");
    }
  }

  async function handleSalvarProfessor(professor) {
    try {
      const novo = await criarProfessor(professor);
      setProfessores([...professores, novo]);
      setErro("");
      navigate("/professores");
    } catch {
      setErro("Erro ao cadastrar professor.");
    }
  }

  async function handleExcluirProfessor(id) {
    try {
      await excluirProfessor(id);
      setProfessores(professores.filter((p) => p.id !== id));
    } catch {
      setErro("Erro ao excluir professor.");
    }
  }

  return (
    <>
      <BarraNavegacao />
      <main className="conteudo">
        <Routes>
          <Route path="/" element={<PaginaInicial />} />
          <Route path="/alunos" element={<PaginaListagem alunos={alunos} aoExcluir={handleExcluirAluno} erro={erro} />} />
          <Route path="/cadastro" element={<PaginaCadastro aoSalvar={handleSalvarAluno} erro={erro} />} />
          <Route path="/professores" element={<PaginaListagemProfessores professores={professores} aoExcluir={handleExcluirProfessor} erro={erro} />} />
          <Route path="/cadastro-professor" element={<PaginaCadastroProfessor aoSalvar={handleSalvarProfessor} erro={erro} />} />
        </Routes>
      </main>
    </>
  );
}

export default App;

import CardAluno from "./CardAluno";

function ListaAlunos({ alunos, aoExcluir }) {
  if (alunos.length === 0) return <p>Nenhum aluno cadastrado.</p>;
  return (
    <div className="lista">
      {alunos.map((aluno) => (
        <CardAluno key={aluno.id} aluno={aluno} aoExcluir={aoExcluir} />
      ))}
    </div>
  );
}

export default ListaAlunos;

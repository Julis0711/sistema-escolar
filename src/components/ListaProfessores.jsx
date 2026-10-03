import CardProfessor from "./CardProfessor";

function ListaProfessores({ professores, aoExcluir }) {
  if (professores.length === 0) return <p>Nenhum professor cadastrado.</p>;
  return (
    <div className="lista">
      {professores.map((professor) => (
        <CardProfessor key={professor.id} professor={professor} aoExcluir={aoExcluir} />
      ))}
    </div>
  );
}

export default ListaProfessores;

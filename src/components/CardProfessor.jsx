function CardProfessor({ professor, aoExcluir }) {
  return (
    <div className="card">
      <h3>{professor.nome}</h3>
      <p><strong>Email:</strong> {professor.email}</p>
      <p><strong>CPF:</strong> {professor.cpf}</p>
      <p><strong>Disciplina:</strong> {professor.disciplina}</p>
      <p><strong>Admissão:</strong> {professor.data_admissao}</p>
      <button onClick={() => aoExcluir(professor.id)}>Excluir</button>
    </div>
  );
}

export default CardProfessor;

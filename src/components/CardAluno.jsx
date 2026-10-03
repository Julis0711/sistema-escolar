function CardAluno({ aluno, aoExcluir }) {
  return (
    <div className="card">
      <h3>{aluno.nome}</h3>
      <p><strong>Email:</strong> {aluno.email}</p>
      <p><strong>CPF:</strong> {aluno.cpf}</p>
      <p><strong>Matrícula:</strong> {aluno.matricula}</p>
      <p><strong>Nascimento:</strong> {aluno.data_nascimento}</p>
      <button onClick={() => aoExcluir(aluno.id)}>Excluir</button>
    </div>
  );
}

export default CardAluno;

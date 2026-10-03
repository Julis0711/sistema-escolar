function MensagemErro({ mensagem }) {
  if (!mensagem) return null;
  return <p className="erro">{mensagem}</p>;
}

export default MensagemErro;

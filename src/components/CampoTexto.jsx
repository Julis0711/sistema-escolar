function CampoTexto({ label, nome, tipo = "text", valor, aoAlterar }) {
  return (
    <div className="campo">
      <label htmlFor={nome}>{label}</label>
      <input
        id={nome}
        name={nome}
        type={tipo}
        value={valor}
        onChange={aoAlterar}
        required
      />
    </div>
  );
}

export default CampoTexto;

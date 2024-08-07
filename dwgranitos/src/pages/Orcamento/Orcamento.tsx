import React, { useState, ChangeEvent, useEffect } from "react";
import "./Formulario.css"; // Importe o arquivo de estilo
import Title from "../../components/Title";

const Formulario = () => {
  const [nome, setNome] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [cep, setCep] = useState("");
  const [celular, setCelular] = useState("");  
  const [email, setEmail] = useState("");
  const [projeto, setProjeto] = useState<File | undefined>(undefined);
    const [titulo, setTitulo] = useState("Orçamento");

  const [cnpj, setCnpj] = useState("");
  const [inscricaoEstadual, setInscricaoEstadual] = useState("");
  const [endereco, setEndereco] = useState("");
  const [bairro, setBairro] = useState("");
  const [telefone, setTelefone] = useState("");
  const [enderecoCobranca, setEnderecoCobranca] = useState("");
  const [contato, setContato] = useState("");


  useEffect(() => {
    document.title = titulo;
  }, [titulo]);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // Aqui você pode chamar a função que envia os dados para o backend
    enviarDados();
  };

  const handleProjetoChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setProjeto(file);
  };

  const enviarDados = () => {
    // Criar uma instância de FormData para enviar os dados como um formulário
    const formData = new FormData();
    formData.append("nome", nome);
    formData.append("empresa", empresa);
    formData.append("cidade", cidade);
    formData.append("estado", estado);
    formData.append("celular", celular);
    formData.append("email", email);
    formData.append("projeto", projeto as Blob);

    

    // Fazer uma requisição para o backend usando fetch ou axios
    fetch("/caminho-do-arquivo-php.php", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        // Verificar a resposta do servidor e realizar as ações apropriadas
        if (response.ok) {
          alert("Dados enviados com sucesso!");
          // Limpar os campos do formulário
          setNome("");
          setEmpresa("");
          setCidade("");
          setEstado("");
          setCelular("");
          setEmail("");
          setProjeto(undefined);
        } else {
          alert("Erro ao enviar os dados. Por favor, tente novamente.");
        }
      })
      .catch((error) => {
        console.error("Ocorreu um erro:", error);
        alert("Erro ao enviar os dados. Por favor, tente novamente.");
      });
  };

  return (
    <>
      <Title title="Orçamento" />
      <form className="formulario" onSubmit={handleSubmit}>
      <div className="descriptionName">
        <label>
          Nome/Razão Social:
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </label>
        </div>

        <div className="description">
        <label>
        CPF/CNPJ:
            <input
              type="text"
              value={empresa}
              onChange={(e) => setEmpresa(e.target.value)}
            />
          </label>
          <label>
            I.E.:
            <input
              type="text"
              value={inscricaoEstadual}
              onChange={(e) => setInscricaoEstadual(e.target.value)}
            />
          </label>
        </div>

        <div className="descriptionAddress">
        <label>
          Endereço:
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </label>
        </div>


        <div className="address">        
          <label>
            Cidade:
            <input
              type="text"
              value={cidade}
              onChange={(e) => setCidade(e.target.value)}
            />
          </label>
          <label>
            Estado:
            <input
              type="text"
              value={estado}
              onChange={(e) => setEstado(e.target.value)}
            />
          </label>
        </div>






        <div className="contatoPhone">
          <label>
            Celular:
            <input
              type="text"
              value={celular}
              onChange={(e) => setCelular(e.target.value)}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <br />
        <label>
          Projeto:
          <input type="file" accept=".pdf" onChange={handleProjetoChange} />
        </label>
        <br />
        <button type="submit">Enviar</button>
      </form>
    </>
  );
};

export default Formulario;

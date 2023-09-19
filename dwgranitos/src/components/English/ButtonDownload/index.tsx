import React from "react";

const ButtonDownload = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/assets/catalog.pdf"; // Caminho para o arquivo do catálogo na pasta de ativos
    link.download = "catalog.pdf"; // Nome do arquivo de download
    link.click();
  };

  return <button onClick={handleDownload}>Baixar Catálogo</button>;
};

export default ButtonDownload;

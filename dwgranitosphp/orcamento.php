<?php
// Recuperar os dados do formulário
$nome = $_POST['nome'];
$empresa = $_POST['empresa'];
$cidade = $_POST['cidade'];
$estado = $_POST['estado'];
$celular = $_POST['celular'];
$email = $_POST['email'];

// Verificar se um arquivo foi enviado
if(isset($_FILES['projeto']) && $_FILES['projeto']['error'] === UPLOAD_ERR_OK){
  $file = $_FILES['projeto'];
  $fileName = $file['name'];
  $fileTmpPath = $file['tmp_name'];
  
  // Mover o arquivo para um diretório de destino
  $uploadDir = 'caminho-do-diretorio-de-destino/';
  $uploadedFilePath = $uploadDir . $fileName;
  move_uploaded_file($fileTmpPath, $uploadedFilePath);
  
  // Agora você pode enviar o email com os dados e o arquivo anexado
  $to = 'seu-email@example.com';
  $subject = 'Novo projeto enviado';
  $message = "Nome: $nome\nEmpresa: $empresa\nCidade: $cidade\nEstado: $estado\nCelular: $celular\nEmail: $email";
  $headers = "From: $email\r\n";
  
  // Adicionar o arquivo anexado ao email
  $fileContent = file_get_contents($uploadedFilePath);
  $encodedFileContent = chunk_split(base64_encode($fileContent));
  $fileAttachment = "Content-Type: application/pdf; name=\"$fileName\"\r\n" .
                    "Content-Disposition: attachment; filename=\"$fileName\"\r\n" .
                    "Content-Transfer-Encoding: base64\r\n\r\n" .
                    "$encodedFileContent\r\n";
  
  // Enviar o email
  $success = mail($to, $subject, $message, $headers . $fileAttachment);
  
  if ($success) {
    // Responder ao frontend com um código de status HTTP apropriado
    http_response_code(200);
  } else {
    // Responder ao frontend com um código de status HTTP apropriado
    http_response_code(500);
  }
}
?>

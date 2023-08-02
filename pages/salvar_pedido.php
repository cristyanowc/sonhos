<?php
// Importar a classe PHPMailer
require 'phpmailer/PHPMailerAutoload.php';

// Receber os dados do pedido
$nome = $_POST["nome"];
$telefone = $_POST["telefone"];
$endereco = $_POST["endereco"];
$itens = json_decode($_POST["itens"]);

// Configurações do servidor de email (substitua pelas suas configurações)
$host = 'smtp.gmail.com';
$username = 'docesonhos29@gmail.com';
$password = 'EQ8#375Pf5';
$fromEmail = 'cristyanowallauer@gmail.com';
$fromName = 'doce sonhos';
$toEmail = 'cristyanowallauer@gmail.com';
$toName = 'doce sonhos';

// Criar uma nova instância do PHPMailer
$mail = new PHPMailer;

// Configurar o servidor de email
$mail->isSMTP();
$mail->Host = $host;
$mail->SMTPAuth = true;
$mail->Username = $username;
$mail->Password = $password;
$mail->SMTPSecure

<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Inclui os arquivos necessários do PHPMailer
// Certifique-se de que a pasta 'vendor' esteja no mesmo diretório que este arquivo no servidor
require 'vendor/autoload.php';

header('Content-Type: application/json; charset=utf-8');

// Função para sanitizar entrada
function sanitize($data) {
    return htmlspecialchars(strip_tags(trim($data)));
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Instancia o PHPMailer
    $mail = new PHPMailer(true);

    try {
        // Carregar configurações sensíveis
        $config = require __DIR__ . '/config.php';

        // Configurações do servidor
        $mail->isSMTP();
        $mail->Host       = $config['smtp_host'];
        $mail->SMTPAuth   = true;
        $mail->Username   = $config['smtp_user'];
        $mail->Password   = $config['smtp_pass'];
        $mail->SMTPSecure = $config['smtp_secure'];
        $mail->Port       = $config['smtp_port'];
        $mail->CharSet    = 'UTF-8';

        // Coleta e sanitização dados
        $nome = sanitize($_POST['user_name'] ?? '');
        $email = sanitize($_POST['user_email'] ?? '');
        $telefone = sanitize($_POST['telefone'] ?? '');
        $cnpj = sanitize($_POST['cnpj'] ?? '');
        $cidade = sanitize($_POST['cidade_uf'] ?? '');
        $analise = sanitize($_POST['analise_opt'] ?? '');
        $quantidade = sanitize($_POST['quantidade'] ?? '');
        $prazoEntrega = sanitize($_POST['prazo_entrega'] ?? '');
        $utilizouServicos = sanitize($_POST['utilizou_servicos'] ?? '');
        $parametros = sanitize($_POST['parametros_desejados'] ?? '');

        // Validação básica
        if (empty($nome) || empty($email) || empty($telefone)) {
            throw new Exception("Preencha os campos obrigatórios.");
        }

        // Remetente e destinatário
        $mail->setFrom('ti@supremaanalitica.com.br', $nome); // Envia como TI mas com nome do cliente
        $mail->addReplyTo($email, $nome); // Responder para o cliente
        $mail->addAddress('vendas@supremaanalitica.com.br', 'Vendas Suprema');

        $mensagem = "";
        
        // Verifica qual o tipo de análise escolhida
        if ($analise === 'agua') {
            $tipoAgua = sanitize($_POST['tipo_agua'] ?? '');
            $tipoAguaOutro = sanitize($_POST['tipo_agua_outro'] ?? '');
            $finalidadeAgua = sanitize($_POST['finalidade_agua'] ?? '');
            $finalidadeAguaOutro = sanitize($_POST['finalidade_agua_outro'] ?? '');
            
            $mensagem .= "<strong>Análise de Água:</strong><br>";
            $mensagem .= "<strong>Tipo:</strong> $tipoAgua<br>";
            if (!empty($tipoAguaOutro)) $mensagem .= "<strong>Especif.:</strong> $tipoAguaOutro<br>";
            $mensagem .= "<strong>Finalidade:</strong> $finalidadeAgua<br>";
            if (!empty($finalidadeAguaOutro)) $mensagem .= "<strong>Especif. Finalidade:</strong> $finalidadeAguaOutro<br>";
        
        } elseif ($analise === 'solo') {
            $objetivoSolo = sanitize($_POST['objetivo_solo'] ?? '');
            $objetivoSoloOutro = sanitize($_POST['objetivo_solo_outro'] ?? '');
            
            $mensagem .= "<strong>Análise de Solo:</strong><br>";
            $mensagem .= "<strong>Objetivo:</strong> $objetivoSolo<br>";
            if (!empty($objetivoSoloOutro)) $mensagem .= "<strong>Especif.:</strong> $objetivoSoloOutro<br>";

        } elseif ($analise === 'cosmeticos') {
            $tipoCosmetico = sanitize($_POST['tipo_cosmetico'] ?? '');
            $tipoCosmeticoOutro = sanitize($_POST['tipo_cosmetico_outro'] ?? '');
            $isLancamento = sanitize($_POST['lancamento_cosmetico'] ?? '');
            
            $mensagem .= "<strong>Análise de Cosméticos:</strong><br>";
            $mensagem .= "<strong>Tipo:</strong> $tipoCosmetico<br>";
            if (!empty($tipoCosmeticoOutro)) $mensagem .= "<strong>Especif.:</strong> $tipoCosmeticoOutro<br>";
            $mensagem .= "<strong>Lançamento?</strong> $isLancamento<br>";

        } elseif ($analise === 'alimentos') {
            $tipoAlimento = sanitize($_POST['tipo_alimento'] ?? '');
            $tipoAlimentoOutro = sanitize($_POST['tipo_alimento_outro'] ?? '');
            $origemAlimento = sanitize($_POST['origem_alimento'] ?? '');
            
            $mensagem .= "<strong>Análise de Alimentos:</strong><br>";
            $mensagem .= "<strong>Tipo:</strong> $tipoAlimento<br>";
            if (!empty($tipoAlimentoOutro)) $mensagem .= "<strong>Especif.:</strong> $tipoAlimentoOutro<br>";
            $mensagem .= "<strong>Origem:</strong> $origemAlimento<br>";

        } elseif ($analise === 'outro') {
            // Em 'outro', usamos os campos de params detalhados ou um campo específico se houver
        }

        // Compondo a mensagem
        $mail->isHTML(true);
        $mail->Subject = 'Novo Orçamento - Site Suprema Analítica';
        $mail->Body    = "
        <div style='font-family: Arial, sans-serif; color: #333;'>
            <h2 style='color: #182d70;'>Solicitação de Orçamento</h2>
            <hr>
            <p><strong>Nome:</strong> $nome</p>
            <p><strong>CNPJ:</strong> $cnpj</p>
            <p><strong>Telefone:</strong> $telefone</p>
            <p><strong>E-mail:</strong> $email</p>
            <p><strong>Cidade/UF:</strong> $cidade</p>
            <br>
            <div style='background: #f4f4f4; padding: 15px; border-radius: 5px;'>
                $mensagem
                <p><strong>Parâmetros/Detalhes:</strong><br>" . nl2br($parametros) . "</p>
                <p><strong>Quantidade:</strong> $quantidade</p>
                <p><strong>Prazo:</strong> $prazoEntrega</p>
                <p><strong>Cliente Novo?</strong> $utilizouServicos</p>
            </div>
        </div>
        ";

        // Envia o e-mail
        $mail->send();
        echo json_encode(['success' => true, 'message' => 'Orçamento solicitado com sucesso!']);
        
    } catch (Exception $e) {
        http_response_code(500);
        echo json_encode(['success' => false, 'message' => "Erro ao enviar: {$mail->ErrorInfo}"]);
    }
} else {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Método não permitido']);
}

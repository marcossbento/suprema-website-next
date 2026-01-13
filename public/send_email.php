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

    // --- Anti-Spam (Honeypot) Check ---
    // Se o campo oculto 'website_check' estiver preenchido, é provável que seja um bot.
    if (!empty($_POST['website_check'])) {
        // Retorna sucesso para enganar o bot, mas não envia o email
        echo json_encode(['success' => true, 'message' => 'Enviado com sucesso!']);
        exit;
    }

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
        $mail->setFrom('ti@supremaanalitica.com.br', 'Site Suprema Analítica'); // Remetente fixo autenticado
        $mail->addReplyTo($email, $nome); // Responder para o cliente
        $mail->addAddress('vendas@supremaanalitica.com.br', 'Vendas Suprema');

        $detalhesAnalise = "";
        $tituloAnalise = "";
        
        // Verifica qual o tipo de análise escolhida e formata os detalhes
        if ($analise === 'agua') {
            $tituloAnalise = "Análise de Água";
            $tipoAgua = sanitize($_POST['tipo_agua'] ?? '-');
            $finalidadeAgua = sanitize($_POST['finalidade_agua'] ?? '-');
            
            $detalhesAnalise .= "<tr><td style='padding: 8px 0; border-bottom: 1px solid #eee;'><strong>Tipo de Água:</strong></td><td style='padding: 8px 0; border-bottom: 1px solid #eee;'>$tipoAgua</td></tr>";
            $detalhesAnalise .= "<tr><td style='padding: 8px 0; border-bottom: 1px solid #eee;'><strong>Finalidade:</strong></td><td style='padding: 8px 0; border-bottom: 1px solid #eee;'>$finalidadeAgua</td></tr>";
        
        } elseif ($analise === 'solo') {
            $tituloAnalise = "Análise de Solo";
            $objetivoSolo = sanitize($_POST['objetivo_solo'] ?? '-');
            
            $detalhesAnalise .= "<tr><td style='padding: 8px 0; border-bottom: 1px solid #eee;'><strong>Objetivo:</strong></td><td style='padding: 8px 0; border-bottom: 1px solid #eee;'>$objetivoSolo</td></tr>";

        } elseif ($analise === 'cosmeticos') {
            $tituloAnalise = "Análise de Cosméticos";
            $tipoCosmetico = sanitize($_POST['tipo_cosmetico'] ?? '-');
            
            $detalhesAnalise .= "<tr><td style='padding: 8px 0; border-bottom: 1px solid #eee;'><strong>Tipo:</strong></td><td style='padding: 8px 0; border-bottom: 1px solid #eee;'>$tipoCosmetico</td></tr>";

        } elseif ($analise === 'alimentos') {
            $tituloAnalise = "Análise de Alimentos";
            $tipoAlimento = sanitize($_POST['tipo_alimento'] ?? '-');
            
            $detalhesAnalise .= "<tr><td style='padding: 8px 0; border-bottom: 1px solid #eee;'><strong>Tipo:</strong></td><td style='padding: 8px 0; border-bottom: 1px solid #eee;'>$tipoAlimento</td></tr>";

        } elseif ($analise === 'outro') {
            $tituloAnalise = "Outros Serviços";
            // Em 'outro', usamos os campos de params detalhados
        } else {
             $tituloAnalise = ucfirst($analise);
        }

        // Estilos CSS Inline para emails
        $primaryColor = "#182d70"; // Azul escuro da marca
        $accentColor = "#00d64f"; // Verde da marca
        $grayLight = "#f8f9fa";
        $textColor = "#333333";

        // Compondo a mensagem HTML
        $mail->isHTML(true);
        $mail->Subject = "Novo Lead: $tituloAnalise - $nome"; // Assunto mais direto
        $mail->Body    = "
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset='UTF-8'>
            <title>Nova Solicitação de Orçamento</title>
        </head>
        <body style='margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4; color: $textColor;'>
            <table role='presentation' border='0' cellpadding='0' cellspacing='0' width='100%'>
                <tr>
                    <td style='padding: 20px 0 30px 0;' align='center'>
                        
                        <!-- Container Principal -->
                        <table role='presentation' border='0' cellpadding='0' cellspacing='0' width='600' style='background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 10px rgba(0,0,0,0.1); overflow: hidden;'>
                            
                            <!-- Cabeçalho -->
                            <tr>
                                <td bgcolor='$primaryColor' style='padding: 30px 40px; text-align: center;'>
                                    <h1 style='margin: 0; font-size: 24px; color: #ffffff; text-transform: uppercase; letter-spacing: 1px;'>Nova Solicitação</h1>
                                    <p style='margin: 10px 0 0; color: $accentColor; font-size: 16px; font-weight: bold;'>$tituloAnalise</p>
                                </td>
                            </tr>

                            <!-- Conteúdo do Cliente -->
                            <tr>
                                <td style='padding: 40px 40px 20px 40px;'>
                                    <h3 style='border-left: 4px solid $accentColor; padding-left: 10px; color: $primaryColor; margin-top: 0;'>Dados do Cliente</h3>
                                    <table role='presentation' border='0' cellpadding='0' cellspacing='0' width='100%' style='font-size: 14px;'>
                                        <tr>
                                            <td width='35%' style='padding: 8px 0; font-weight: bold; color: #666;'>Nome Completo:</td>
                                            <td style='padding: 8px 0;'>$nome</td>
                                        </tr>
                                        <tr>
                                            <td style='padding: 8px 0; font-weight: bold; color: #666;'>Empresa / CNPJ:</td>
                                            <td style='padding: 8px 0;'>$cnpj</td>
                                        </tr>
                                        <tr>
                                            <td style='padding: 8px 0; font-weight: bold; color: #666;'>Email:</td>
                                            <td style='padding: 8px 0;'><a href='mailto:$email' style='color: $primaryColor; text-decoration: none;'>$email</a></td>
                                        </tr>
                                        <tr>
                                            <td style='padding: 8px 0; font-weight: bold; color: #666;'>Telefone / WhatsApp:</td>
                                            <td style='padding: 8px 0;'><a href='https://wa.me/55" . preg_replace('/\D/', '', $telefone) . "' style='color: $accentColor; text-decoration: none; font-weight: bold;'>$telefone (Clique para Whats)</a></td>
                                        </tr>
                                        <tr>
                                            <td style='padding: 8px 0; font-weight: bold; color: #666;'>Localização:</td>
                                            <td style='padding: 8px 0;'>$cidade</td>
                                        </tr>
                                         <tr>
                                            <td style='padding: 8px 0; font-weight: bold; color: #666;'>Cliente Recorrente?</td>
                                            <td style='padding: 8px 0;'><span style='background-color: #eef2ff; color: $primaryColor; padding: 4px 8px; border-radius: 4px; font-size: 12px;'>$utilizouServicos</span></td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>

                            <!-- Conteúdo da Solicitação -->
                            <tr>
                                <td style='padding: 0 40px 40px 40px;'>
                                    <div style='background-color: $grayLight; border-radius: 8px; padding: 25px;'>
                                        <h3 style='border-left: 4px solid $accentColor; padding-left: 10px; color: $primaryColor; margin-top: 0;'>Detalhes do Orçamento</h3>
                                        <table role='presentation' border='0' cellpadding='0' cellspacing='0' width='100%' style='font-size: 14px;'>
                                            
                                            $detalhesAnalise

                                            <tr>
                                                <td width='40%' style='padding: 8px 0; border-bottom: 1px solid #eee;'><strong>Quantidade:</strong></td>
                                                <td style='padding: 8px 0; border-bottom: 1px solid #eee;'>$quantidade</td>
                                            </tr>
                                            <tr>
                                                <td style='padding: 8px 0; border-bottom: 1px solid #eee;'><strong>Prazo Desejado:</strong></td>
                                                <td style='padding: 8px 0; border-bottom: 1px solid #eee;'>$prazoEntrega</td>
                                            </tr>
                                        </table>
                                        
                                        <p style='margin-top: 20px; font-weight: bold; color: $primaryColor;'>Observações / Parâmetros:</p>
                                        <div style='background-color: #ffffff; border: 1px solid #e0e0e0; padding: 15px; border-radius: 4px; color: #555; font-style: italic; white-space: pre-wrap;'>" . (empty($parametros) ? 'Nenhuma observação informada.' : $parametros) . "</div>
                                    </div>
                                </td>
                            </tr>

                             <!-- Rodapé -->
                            <tr>
                                <td bgcolor='$primaryColor' style='padding: 20px; text-align: center; color: #8898aa; font-size: 12px;'>
                                    <p style='margin: 0;'>Suprema Analítica &copy; " . date('Y') . "</p>
                                    <p style='margin: 5px 0 0;'>Email enviado automaticamente pelo site.</p>
                                </td>
                            </tr>

                        </table>
                    </td>
                </tr>
            </table>
        </body>
        </html>
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

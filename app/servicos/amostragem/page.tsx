import { Metadata } from 'next';
import AmostragemPage from './content';

export const metadata: Metadata = {
    title: 'Coleta e Logística de Amostras | Suprema Analítica',
    description: 'Garanta a integridade da sua amostra. Coleta com rigor técnico, preservação correta e logística eficiente para resultados precisos.',
    openGraph: {
        title: 'Coleta e Logística de Amostras | Suprema Analítica',
        description: 'A precisão da sua análise começa na coleta. Conheça nossos diferenciais em amostragem e logística.',
        url: 'https://supremaanalitica.com.br/servicos/amostragem',
    },
    alternates: {
        canonical: 'https://supremaanalitica.com.br/servicos/amostragem',
    },
};

export default function Page() {
    return <AmostragemPage />;
}

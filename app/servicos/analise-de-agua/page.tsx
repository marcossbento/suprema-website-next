import { Metadata } from 'next';
import AnaliseDeAguaPage from './content';

export const metadata: Metadata = {
    title: 'Análise de Água | Suprema Analítica',
    description: 'Análise de água com precisão e confiabilidade. Potabilidade, água residual, industrial e muito mais. Acreditado ISO/IEC 17025.',
    openGraph: {
        title: 'Análise de Água | Suprema Analítica',
        description: 'Garanta a qualidade da água com nossas análises especializadas. Atendemos municípios, empresas e indústrias.',
        url: 'https://supremaanalitica.com.br/servicos/analise-de-agua',
    },
    alternates: {
        canonical: 'https://supremaanalitica.com.br/servicos/analise-de-agua',
    },
};

export default function Page() {
    return <AnaliseDeAguaPage />;
}

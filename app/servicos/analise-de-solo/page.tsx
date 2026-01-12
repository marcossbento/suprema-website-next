import { Metadata } from 'next';
import AnaliseDeSoloPage from './content';

export const metadata: Metadata = {
    title: 'Análise de Solo | Suprema Analítica',
    description: 'Maximize sua produtividade agrícola com análises de solo precisas. Fertilidade, classificação e correção de solo.',
    openGraph: {
        title: 'Análise de Solo | Suprema Analítica',
        description: 'Diagnóstico preciso do solo para aumentar a eficiência da sua lavoura. Atendemos produtores rurais e empresas.',
        url: 'https://supremaanalitica.com.br/servicos/analise-de-solo',
    },
    alternates: {
        canonical: 'https://supremaanalitica.com.br/servicos/analise-de-solo',
    },
};

export default function Page() {
    return <AnaliseDeSoloPage />;
}

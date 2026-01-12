import { Metadata } from 'next';
import EfluentesPage from './content';

export const metadata: Metadata = {
    title: 'Análise de Efluentes | Suprema Analítica',
    description: 'Garanta a conformidade ambiental da sua empresa. Análises de efluentes industriais e sanitários atendendo à legislação vigente.',
    openGraph: {
        title: 'Análise de Efluentes | Suprema Analítica',
        description: 'Evite passivos ambientais. Monitoramento e análise de efluentes com precisão e agilidade.',
        url: 'https://supremaanalitica.com.br/servicos/efluentes',
    },
    alternates: {
        canonical: 'https://supremaanalitica.com.br/servicos/efluentes',
    },
};

export default function Page() {
    return <EfluentesPage />;
}

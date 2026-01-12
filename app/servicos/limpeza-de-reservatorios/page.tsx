import { Metadata } from 'next';
import LimpezaPage from './content';

export const metadata: Metadata = {
    title: 'Limpeza e Desinfecção de Reservatórios | Suprema Analítica',
    description: 'Garanta a qualidade da água armazenada. Limpeza e desinfecção de caixas d\'água e reservatórios com equipe especializada e produtos certificados.',
    openGraph: {
        title: 'Limpeza e Desinfecção de Reservatórios | Suprema Analítica',
        description: 'Manutenção essencial para saúde e segurança. Limpeza de reservatórios para residências, condomínios e indústrias.',
        url: 'https://supremaanalitica.com.br/servicos/limpeza-de-reservatorios',
    },
    alternates: {
        canonical: 'https://supremaanalitica.com.br/servicos/limpeza-de-reservatorios',
    },
};

export default function Page() {
    return <LimpezaPage />;
}

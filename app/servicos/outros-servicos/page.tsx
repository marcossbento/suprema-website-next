import { Metadata } from 'next';
import OutrosServicosPage from './content';

export const metadata: Metadata = {
    title: 'Outros Serviços | Suprema Analítica',
    description: 'Soluções completas em análises e consultoria ambiental. Projetos personalizados para atender às necessidades específicas do seu negócio.',
    openGraph: {
        title: 'Outros Serviços | Suprema Analítica',
        description: 'Não encontrou o que procura? Entre em contato e conheça nossa gama completa de serviços e consultoria técnica.',
        url: 'https://supremaanalitica.com.br/servicos/outros-servicos',
    },
    alternates: {
        canonical: 'https://supremaanalitica.com.br/servicos/outros-servicos',
    },
};

export default function Page() {
    return <OutrosServicosPage />;
}

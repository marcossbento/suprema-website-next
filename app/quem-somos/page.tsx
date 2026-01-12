import { Metadata } from 'next';
import QuemSomosPage from './content';

export const metadata: Metadata = {
    title: 'Quem Somos | Suprema Analítica',
    description: 'Conheça a história e os diferenciais da Suprema Analítica. Desde 2001 oferecendo excelência em análises ambientais com acreditação ISO/IEC 17025.',
    openGraph: {
        title: 'Quem Somos | Suprema Analítica',
        description: 'Mais que um laboratório: Referência em Precisão e Excelência. Conheça nossa história, equipe e tecnologia.',
        url: 'https://supremaanalitica.com.br/quem-somos',
    },
    alternates: {
        canonical: 'https://supremaanalitica.com.br/quem-somos',
    },
};

export default function Page() {
    return <QuemSomosPage />;
}

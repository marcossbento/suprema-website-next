import { Metadata } from 'next';
import AnaliseDeAlimentosPage from './content';

export const metadata: Metadata = {
    title: 'Análise de Alimentos | Suprema Analítica',
    description: 'Controle de qualidade e segurança alimentar. Análises microbiológicas e físico-químicas para indústria, serviços de alimentação e varejo.',
    openGraph: {
        title: 'Análise de Alimentos | Suprema Analítica',
        description: 'Garanta a segurança dos alimentos que você produz ou comercializa. Atendemos RDC da ANVISA e outras normas.',
        url: 'https://supremaanalitica.com.br/servicos/analise-de-alimentos',
    },
    alternates: {
        canonical: 'https://supremaanalitica.com.br/servicos/analise-de-alimentos',
    },
};

export default function Page() {
    return <AnaliseDeAlimentosPage />;
}

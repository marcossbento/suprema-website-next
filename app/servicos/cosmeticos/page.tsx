import { Metadata } from 'next';
import CosmeticosPage from './content';

export const metadata: Metadata = {
    title: 'Análise de Cosméticos e Saneantes | Suprema Analítica',
    description: 'Controle físico-químico e microbiológico para indústria de cosméticos e saneantes. Garantia de qualidade e segurança do seu produto.',
    openGraph: {
        title: 'Análise de Cosméticos e Saneantes | Suprema Analítica',
        description: 'Análises completas para garantir a eficácia e segurança de cosméticos, produtos de higiene e saneantes.',
        url: 'https://supremaanalitica.com.br/servicos/cosmeticos',
    },
    alternates: {
        canonical: 'https://supremaanalitica.com.br/servicos/cosmeticos',
    },
};

export default function Page() {
    return <CosmeticosPage />;
}

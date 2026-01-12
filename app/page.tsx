import { Metadata } from 'next';
import Content from './content';

export const metadata: Metadata = {
    title: 'Suprema Analítica | Laboratório de Controle de Qualidade',
    description: 'O laboratório de análises número 1 do Brasil. Análises de água, efluentes, alimentos, solo e muito mais com acreditação ISO/IEC 17025.',
    alternates: {
        canonical: 'https://supremaanalitica.com.br',
    },
};

export default function Page() {
    return <Content />;
}

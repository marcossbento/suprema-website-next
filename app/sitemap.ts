import { MetadataRoute } from 'next'

export const dynamic = 'force-static'


export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://supremaanalitica.com.br'

  const routes = [
    '',
    '/quem-somos',
    '/contato',
    '/servicos/amostragem',
    '/servicos/analise-de-agua',
    '/servicos/analise-de-alimentos',
    '/servicos/analise-de-solo',
    '/servicos/cosmeticos',
    '/servicos/efluentes',
    '/servicos/limpeza-de-reservatorios',
    '/servicos/outros-servicos',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.8,
  }))
}

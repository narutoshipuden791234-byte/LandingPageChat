import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function Privacidade() {
  return (
    <div className="bg-white py-12 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium transition-colors"
          >
            <ArrowLeft size={20} />
            Voltar para Início
          </Link>
        </div>

        <article className="prose prose-lg max-w-none">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Política de Privacidade
          </h1>

          <p className="text-xl text-gray-600 mb-12">
            Sua privacidade é importante para nós
          </p>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Informações Gerais
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Este site tem como objetivo divulgar uma promoção oficial do TikTok Lite.
              Não coletamos dados pessoais dos visitantes além das informações necessárias
              para o funcionamento básico do site.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Links Externos
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Este site contém links para plataformas externas (TikTok Lite e WhatsApp).
              Ao clicar nesses links, você será direcionado para serviços de terceiros que
              possuem suas próprias políticas de privacidade.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Cookies
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Este site pode utilizar cookies básicos para melhorar a experiência de
              navegação do usuário. Você pode desabilitar cookies nas configurações do
              seu navegador.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Responsabilidade
            </h2>
            <p className="text-gray-700 leading-relaxed">
              A promoção divulgada neste site é de responsabilidade do TikTok Lite.
              Não nos responsabilizamos por problemas técnicos, alterações nos termos da
              promoção ou questões relacionadas ao pagamento dos bônus.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Contato
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Para dúvidas sobre esta política ou sobre o site, entre em contato através
              do WhatsApp disponibilizado na página de Suporte.
            </p>
          </section>

          <section className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <p className="text-gray-600 mb-0">
              <strong>Última atualização:</strong> Dezembro de 2024
            </p>
          </section>
        </article>

        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors shadow-md"
          >
            <ArrowLeft size={20} />
            Voltar para Início
          </Link>
        </div>
      </div>
    </div>
  );
}

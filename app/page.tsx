import ChatButton from '@/components/ChatButton';
import {
  DollarSign,
  Zap,
  Shield,
  CheckCircle,
  Download,
  Gift,
  TrendingUp,
  Users,
  Star
} from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-white">
      <section className="relative bg-gradient-to-br from-green-50 to-blue-50 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
              Ganhe Dinheiro com a<br />
              <span className="text-green-600">Promoção Oficial do app!</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed">
              Participe da promoção exclusiva do app e receba bônus reais
              diretamente no seu PayPal ou conta bancária. É fácil, rápido e oficial!
            </p>

            <div className="flex justify-center mb-12">
              <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
                <div className="flex justify-center mb-6">
                  <div className="bg-gradient-to-br from-green-400 to-blue-500 rounded-full p-6">
                    <Gift size={64} className="text-white" />
                  </div>
                </div>
                <ChatButton
                  text="Fale comigo pelo chat e saiba como participar"
                  variant="primary"
                  size="large"
                />
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <CheckCircle size={20} className="text-green-600" />
                <span>100% Gratuito</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={20} className="text-green-600" />
                <span>Pagamento Rápido</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={20} className="text-green-600" />
                <span>Oficial TikTok</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            Por que participar?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow border border-gray-100">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <DollarSign size={32} className="text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Bônus Reais</h3>
              <p className="text-gray-600">
                Receba dinheiro real diretamente na sua conta PayPal ou bancária.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow border border-gray-100">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Zap size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Fácil de Participar</h3>
              <p className="text-gray-600">
                Processo simples e rápido. Comece em poucos minutos!
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow border border-gray-100">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <TrendingUp size={32} className="text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Pagamento Rápido</h3>
              <p className="text-gray-600">
                Receba seus ganhos rapidamente após completar os requisitos.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow border border-gray-100">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Promoção Oficial</h3>
              <p className="text-gray-600">
                Campanha oficial do app. Totalmente segura e confiável.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Como Funciona?
          </h2>
          <p className="text-center text-gray-600 mb-16 text-lg">
            Siga estes passos simples e comece a ganhar agora mesmo!
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-green-500">
              <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mb-4">
                1
              </div>
              <div className="flex justify-center mb-4">
                <Download size={48} className="text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Baixe o app</h3>
              <p className="text-gray-600">
                Instale o aplicativo app no seu celular através da loja oficial.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-blue-500">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mb-4">
                2
              </div>
              <div className="flex justify-center mb-4">
                <Gift size={48} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Use o Código de Convite</h3>
              <p className="text-gray-600">
                Insira o código exclusivo que vou te fornecer no chat para ativar o bônus.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-green-500">
              <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mb-4">
                3
              </div>
              <div className="flex justify-center mb-4">
                <Star size={48} className="text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Acumule Pontos</h3>
              <p className="text-gray-600">
                Assista vídeos e complete tarefas simples para acumular seus pontos.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-blue-500">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mb-4">
                4
              </div>
              <div className="flex justify-center mb-4">
                <DollarSign size={48} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Receba o Pagamento</h3>
              <p className="text-gray-600">
                Resgate seus ganhos diretamente no PayPal ou conta bancária.
              </p>
            </div>
          </div>

          <div className="text-center">
            <ChatButton
              text="Tire suas dúvidas no chat agora"
              variant="secondary"
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <Users size={48} className="text-green-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Milhares já estão ganhando!
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Junte-se a milhares de pessoas que já descobriram como ganhar dinheiro
              extra com o app de forma simples e rápida.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 border border-gray-200">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Incrível! Recebi meu primeiro pagamento em menos de uma semana.
                Super recomendo!"
              </p>
              <p className="text-gray-600 font-semibold">- Maria S.</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 border border-gray-200">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Processo muito simples e o suporte pelo chat foi excelente.
                Já resgatei várias vezes!"
              </p>
              <p className="text-gray-600 font-semibold">- João P.</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 border border-gray-200">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Estava desconfiada no início, mas é verdade! Recebi direto no PayPal.
                Maravilhoso!"
              </p>
              <p className="text-gray-600 font-semibold">- Ana L.</p>
            </div>
          </div>

          <div className="text-center">
            <ChatButton
              text="Quero começar agora pelo chat"
              variant="primary"
              size="large"
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
            <div className="bg-red-100 text-red-800 font-bold text-sm px-4 py-2 rounded-full inline-block mb-6">
              ATENÇÃO - VAGAS LIMITADAS
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Não perca tempo! A promoção é limitada.
            </h2>

            <p className="text-lg text-gray-700 mb-8">
              O app limita o número de participantes em cada região.
              Fale comigo no chat agora para garantir sua vaga e receber seu código
              exclusivo antes que as vagas acabem!
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-center gap-3 text-green-700">
                <CheckCircle size={24} />
                <span className="font-semibold">Suporte completo pelo chat</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-green-700">
                <CheckCircle size={24} />
                <span className="font-semibold">Código exclusivo garantido</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-green-700">
                <CheckCircle size={24} />
                <span className="font-semibold">Resposta imediata</span>
              </div>
            </div>

            <ChatButton
              text="Me pergunte como ganhar mais no chat"
              variant="primary"
              size="large"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

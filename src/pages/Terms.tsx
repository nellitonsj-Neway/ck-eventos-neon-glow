import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Terms() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <Link to="/">
          <Button variant="ghost" className="mb-8 gap-2">
            <ArrowLeft className="w-4 h-4" />
            Voltar para o site
          </Button>
        </Link>

        <h1 className="text-4xl font-bold mb-8 text-gradient-primary">
          Termos de Uso
        </h1>

        <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
          <p className="text-sm text-muted-foreground">
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">1. Aceitação dos Termos</h2>
            <p>
              Ao acessar e usar o site da CK Eventos, você concorda em cumprir e estar vinculado a 
              estes Termos de Uso. Se você não concorda com qualquer parte destes termos, não deve 
              usar nosso site ou serviços.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">2. Descrição dos Serviços</h2>
            <p>
              A CK Eventos oferece serviços de planejamento e execução de eventos, incluindo mas não 
              limitado a:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Planejamento e coordenação de eventos sociais e corporativos</li>
              <li>Serviços de bar e drinks</li>
              <li>Cabine de fotos 360°</li>
              <li>Decoração temática</li>
              <li>Buffet e catering</li>
              <li>Som e iluminação</li>
              <li>Cerimonial</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">3. Calculadora de Orçamento</h2>
            <p>
              A calculadora de orçamento disponível em nosso site fornece apenas estimativas aproximadas. 
              Os valores finais podem variar de acordo com:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Disponibilidade de data</li>
              <li>Localização do evento</li>
              <li>Personalizações específicas</li>
              <li>Serviços adicionais solicitados</li>
              <li>Condições de mercado</li>
            </ul>
            <p>
              Para um orçamento preciso e detalhado, é necessário contato direto com nossa equipe.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">4. Contratação de Serviços</h2>
            <p>
              A contratação de nossos serviços está sujeita a:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Disponibilidade de data e equipe</li>
              <li>Assinatura de contrato específico detalhando todos os serviços</li>
              <li>Pagamento de sinal conforme especificado no contrato</li>
              <li>Cumprimento de prazos estabelecidos</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">5. Pagamentos e Cancelamentos</h2>
            <p>
              <strong>Pagamentos:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Sinal de 50% no ato da contratação</li>
              <li>Restante até 7 dias antes do evento</li>
              <li>Formas de pagamento: transferência bancária, PIX, cartão de crédito</li>
            </ul>
            <p className="mt-4">
              <strong>Cancelamentos:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Com mais de 30 dias de antecedência: reembolso de 80% do valor pago</li>
              <li>Entre 15 e 30 dias: reembolso de 50%</li>
              <li>Menos de 15 dias: sem reembolso</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">6. Responsabilidades do Cliente</h2>
            <p>O cliente é responsável por:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Fornecer informações precisas sobre o evento</li>
              <li>Garantir acesso ao local com antecedência para montagem</li>
              <li>Comunicar alterações com no mínimo 7 dias de antecedência</li>
              <li>Obter autorizações necessárias do local</li>
              <li>Informar restrições ou necessidades especiais</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">7. Responsabilidades da CK Eventos</h2>
            <p>A CK Eventos se compromete a:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Executar os serviços contratados conforme acordado</li>
              <li>Manter comunicação clara e transparente</li>
              <li>Utilizar materiais e equipamentos de qualidade</li>
              <li>Ter equipe profissional e treinada</li>
              <li>Cumprir horários acordados</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">8. Limitação de Responsabilidade</h2>
            <p>
              A CK Eventos não se responsabiliza por:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Danos causados por terceiros não contratados por nós</li>
              <li>Condições climáticas adversas em eventos externos</li>
              <li>Problemas estruturais do local do evento</li>
              <li>Comportamento inadequado de convidados</li>
              <li>Casos de força maior ou caso fortuito</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">9. Propriedade Intelectual</h2>
            <p>
              Todo o conteúdo do site (textos, imagens, logos, design) é propriedade da CK Eventos 
              e protegido por leis de propriedade intelectual. É proibida a reprodução sem autorização.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">10. Alterações nos Termos</h2>
            <p>
              Reservamo-nos o direito de modificar estes termos a qualquer momento. Alterações 
              entram em vigor imediatamente após publicação no site.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">11. Lei Aplicável</h2>
            <p>
              Estes termos são regidos pelas leis brasileiras. Qualquer disputa será resolvida no 
              foro da comarca de Belo Horizonte, MG.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">12. Contato</h2>
            <p>
              Para dúvidas sobre estes Termos de Uso:
            </p>
            <ul className="list-none space-y-2">
              <li>📧 E-mail: contato@ckeventos.com.br</li>
              <li>📱 WhatsApp: (31) 99343-6059</li>
              <li>📍 Endereço: Belo Horizonte, MG</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

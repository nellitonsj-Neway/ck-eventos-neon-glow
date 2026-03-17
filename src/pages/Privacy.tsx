import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Privacy() {
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
          Política de Privacidade
        </h1>

        <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
          <p className="text-sm text-muted-foreground">
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">1. Introdução</h2>
            <p>
              A CK Eventos ("nós", "nosso" ou "empresa") está comprometida em proteger sua privacidade. 
              Esta Política de Privacidade explica como coletamos, usamos, divulgamos e protegemos suas 
              informações quando você visita nosso site ou utiliza nossos serviços.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">2. Informações que Coletamos</h2>
            <p>Coletamos as seguintes informações:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Informações de Contato:</strong> nome, e-mail, telefone e endereço quando você 
                preenche formulários em nosso site.
              </li>
              <li>
                <strong>Informações de Evento:</strong> tipo de evento, número de convidados, data pretendida 
                e serviços de interesse quando você utiliza nossa calculadora de orçamento.
              </li>
              <li>
                <strong>Informações de Navegação:</strong> endereço IP, tipo de navegador, páginas visitadas 
                e tempo de permanência no site.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">3. Como Usamos suas Informações</h2>
            <p>Utilizamos suas informações para:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Responder suas solicitações de orçamento e contato</li>
              <li>Fornecer e melhorar nossos serviços</li>
              <li>Enviar comunicações sobre nossos eventos e promoções (com seu consentimento)</li>
              <li>Analisar e melhorar a experiência do usuário em nosso site</li>
              <li>Cumprir obrigações legais</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">4. Compartilhamento de Informações</h2>
            <p>
              Não vendemos, alugamos ou comercializamos suas informações pessoais. Podemos compartilhar 
              suas informações apenas com:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Fornecedores e parceiros que nos auxiliam na prestação de serviços</li>
              <li>Autoridades legais quando exigido por lei</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">5. Segurança dos Dados</h2>
            <p>
              Implementamos medidas de segurança técnicas e organizacionais apropriadas para proteger 
              suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">6. Seus Direitos (LGPD)</h2>
            <p>Conforme a Lei Geral de Proteção de Dados (LGPD), você tem direito a:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Confirmar a existência de tratamento de seus dados</li>
              <li>Acessar seus dados</li>
              <li>Corrigir dados incompletos, inexatos ou desatualizados</li>
              <li>Solicitar a anonimização, bloqueio ou eliminação de dados</li>
              <li>Revogar o consentimento</li>
            </ul>
            <p>
              Para exercer esses direitos, entre em contato conosco através do e-mail: 
              ckeventos.s@gmail.com
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">7. Cookies</h2>
            <p>
              Nosso site pode usar cookies para melhorar sua experiência. Você pode configurar seu 
              navegador para recusar cookies, mas isso pode afetar a funcionalidade do site.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">8. Alterações nesta Política</h2>
            <p>
              Podemos atualizar esta Política de Privacidade periodicamente. A data da última atualização 
              será sempre indicada no início do documento.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">9. Contato</h2>
            <p>
              Para dúvidas sobre esta Política de Privacidade, entre em contato:
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

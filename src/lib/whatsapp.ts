import { CalculatorData, Budget } from '@/utils/calculator';
import { getEventTypeById } from '@/config/eventTypes';
import { getServiceById } from '@/config/services';
import { getBarMenu } from '@/config/pricing';
import { formatCurrency, formatDate } from '@/utils/formatters';

const WHATSAPP_NUMBER = '5531993436059';

function openWhatsApp(url: string): void {
  const a = document.createElement('a');
  a.href = url;
  a.target = '_blank';
  a.rel = 'noopener noreferrer';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

export function formatCalculatorMessage(
  data: CalculatorData,
  budget: Budget
): string {
  const eventType = getEventTypeById(data.eventType);
  const eventName = eventType ? eventType.name : data.eventType;

  const servicesText = data.services
    .map((selection) => {
      const service = getServiceById(selection.serviceId);
      let serviceName = service?.name || selection.serviceId;

      if (selection.barType) {
        const menu = getBarMenu(selection.barType);
        serviceName += ` (${menu?.name || selection.barType})`;
      }
      if (selection.hours) {
        serviceName += ` (${selection.hours}h)`;
      }
      if (service?.isUnderConsultation) {
        serviceName += ' - Sob consulta';
      }

      return `✓ ${serviceName}`;
    })
    .join('\n');

  let estimateBlock = '';
  if (budget.status === 'consultation-only') {
    estimateBlock = `💰 *Estimativa:*\nSob consulta (todos os serviços selecionados precisam de orçamento personalizado).`;
  } else if (budget.status === 'mixed') {
    estimateBlock = `💰 *Estimativa Calculada:*\n${formatCurrency(budget.min)} - ${formatCurrency(budget.max)}\n\n⚠️ *Nota:* Alguns serviços têm preço sob consulta e não estão incluídos na estimativa acima.`;
  } else {
    estimateBlock = `💰 *Estimativa Calculada:*\n${formatCurrency(budget.min)} - ${formatCurrency(budget.max)}`;
  }

  const message = `🎉 *Solicitação de Orçamento - CK Eventos*

Olá! Fiz uma simulação no site e gostaria de um orçamento detalhado:

🎊 *Detalhes do Evento:*
Tipo: ${eventName}
Convidados: ${data.guests} pessoas
Data Pretendida: ${formatDate(data.date)}

🎯 *Serviços de Interesse:*
${servicesText}

${estimateBlock}

Aguardo retorno para mais informações! 🙏`;

  return message;
}

export function sendCalculatorToWhatsApp(
  data: CalculatorData,
  budget: Budget
): void {
  const message = formatCalculatorMessage(data, budget);
  const encodedMessage = encodeURIComponent(message);
  const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
  openWhatsApp(whatsappURL);
}

export function sendSimpleWhatsAppMessage(message: string): void {
  const encodedMessage = encodeURIComponent(message);
  const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
  openWhatsApp(whatsappURL);
}

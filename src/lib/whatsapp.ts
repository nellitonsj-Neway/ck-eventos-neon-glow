import { CalculatorData, Budget } from '@/utils/calculator';
import { getEventTypeById } from '@/config/eventTypes';
import { getServiceById } from '@/config/services';
import { getBarMenu } from '@/config/pricing';
import { formatCurrency, formatDate } from '@/utils/formatters';

const WHATSAPP_NUMBER = '5531993436059';

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
      
      // Adicionar detalhes específicos
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

  const consultationNote = budget.hasConsultationItems 
    ? '\n\n⚠️ *Nota:* Alguns serviços têm preço sob consulta e não estão incluídos na estimativa acima.'
    : '';

  const message = `🎉 *Solicitação de Orçamento - CK Eventos*

Olá! Fiz uma simulação no site e gostaria de um orçamento detalhado:

🎊 *Detalhes do Evento:*
Tipo: ${eventName}
Convidados: ${data.guests} pessoas
Data Pretendida: ${formatDate(data.date)}

🎯 *Serviços de Interesse:*
${servicesText}

💰 *Estimativa Calculada:*
${formatCurrency(budget.min)} - ${formatCurrency(budget.max)}${consultationNote}

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
  window.open(whatsappURL, '_blank');
}

export function sendSimpleWhatsAppMessage(message: string): void {
  const encodedMessage = encodeURIComponent(message);
  const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
  window.open(whatsappURL, '_blank');
}

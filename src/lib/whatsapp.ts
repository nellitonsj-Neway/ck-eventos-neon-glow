import { CalculatorData, Budget } from '@/utils/calculator';
import { getEventTypeById } from '@/config/eventTypes';
import { getServiceById } from '@/config/services';
import { formatCurrency, formatDate } from '@/utils/formatters';

const WHATSAPP_NUMBER = '5531993436059';

export function formatCalculatorMessage(
  data: CalculatorData,
  budget: Budget
): string {
  const eventType = getEventTypeById(data.eventType);
  const eventName = eventType ? `${eventType.emoji} ${eventType.name}` : data.eventType;
  
  const servicesText = data.services
    .map((serviceId) => {
      const service = getServiceById(serviceId);
      let serviceName = service?.name || serviceId;
      
      // Adicionar detalhes específicos
      if (serviceId === 'bar' && data.barWithAlcohol !== undefined) {
        serviceName += data.barWithAlcohol ? ' (com álcool)' : ' (sem álcool)';
      }
      if (serviceId === 'photo-booth' && data.photoBoothHours) {
        serviceName += ` (${data.photoBoothHours}h)`;
      }
      
      return `✓ ${serviceName}`;
    })
    .join('\n');

  const message = `🎉 *Solicitação de Orçamento - CK Eventos*

Olá! Fiz uma simulação no site e gostaria de um orçamento detalhado:

🎊 *Detalhes do Evento:*
Tipo: ${eventName}
Convidados: ${data.guests} pessoas
Data Pretendida: ${formatDate(data.date)}

🎯 *Serviços de Interesse:*
${servicesText}

💰 *Estimativa Calculada:*
${formatCurrency(budget.min)} - ${formatCurrency(budget.max)}

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

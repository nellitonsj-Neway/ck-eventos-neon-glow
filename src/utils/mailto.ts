interface MailtoData {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  message: string;
}

export function generateMailto(data: MailtoData): string {
  const subject = encodeURIComponent(`Contato - ${data.eventType}`);
  const body = encodeURIComponent(
    `Nome: ${data.name}\n` +
    `Email: ${data.email}\n` +
    `Telefone: ${data.phone}\n` +
    `Tipo de Evento: ${data.eventType}\n\n` +
    `Mensagem:\n${data.message}`
  );

  return `mailto:ckeventos.s@gmail.com?subject=${subject}&body=${body}`;
}

export function generateWhatsAppMessage(data: MailtoData): string {
  const message = encodeURIComponent(
    `Olá! Gostaria de mais informações sobre os serviços da CK Eventos.\n\n` +
    `Nome: ${data.name}\n` +
    `Tipo de Evento: ${data.eventType}\n` +
    `Mensagem: ${data.message}`
  );

  return `https://wa.me/5531993436059?text=${message}`;
}

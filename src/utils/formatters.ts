import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
}

export function formatDate(date: Date): string {
  return format(date, "dd/MM/yyyy", { locale: ptBR });
}

export function formatDateLong(date: Date): string {
  return format(date, "dd 'de' MMMM 'de' yyyy", { locale: ptBR });
}

export function getDayOfWeek(date: Date): string {
  return format(date, 'EEEE', { locale: ptBR });
}

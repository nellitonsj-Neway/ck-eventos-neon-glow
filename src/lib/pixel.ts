
declare global {
  interface Window {
    fbq: any;
  }
}

export const pixelEvent = (name: string, options?: object) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', name, options);
  } else {
    console.warn(`[Pixel] Evento "${name}" não disparado: fbq não encontrado.`);
  }
};

export const pixelCustomEvent = (name: string, options?: object) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('trackCustom', name, options);
  }
};

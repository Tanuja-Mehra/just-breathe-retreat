export function buildWhatsAppLink(phone = '+919958830478', message = 'Hello! I would love to join the retreat.') {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phone.replace(/[^\d]/g, '')}?text=${encodedMessage}`;
}

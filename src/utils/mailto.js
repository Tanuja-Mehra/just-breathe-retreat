export function buildMailtoLink(email = 'namaste@flowherenow.in', subject = 'Retreat enquiry', body = 'I would love to know more about the retreat.') {
  return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

import Button from '../common/Button';
import { buildWhatsAppLink } from '../../utils/whatsapp';
import { buildMailtoLink } from '../../utils/mailto';

function ContactCTASection() {
  return (
    <section id="contact" className="bg-brand-navy px-6 py-20 text-white lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 rounded-[2rem] border border-white/15 bg-white/10 p-8 lg:flex-row lg:items-center lg:justify-between lg:p-12">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-teal">Start your journey</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Invest in yourself. Begin your wellness retreat.</h2>
          <p className="mt-4 text-lg text-slate-200">Spots are limited for this intimate and restorative experience in the hills.</p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary" onClick={() => window.open(buildWhatsAppLink(), '_blank')}>WhatsApp Us</Button>
          <Button variant="ghost" className="border-white text-white hover:bg-white hover:text-brand-navy" onClick={() => window.open(buildMailtoLink(), '_blank')}>Email Us</Button>
        </div>
      </div>
    </section>
  );
}

export default ContactCTASection;

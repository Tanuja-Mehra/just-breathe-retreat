import Card from '../common/Card';
import Button from '../common/Button';
import { pricingData } from '../../data/pricingData';
import { buildWhatsAppLink } from '../../utils/whatsapp';

function PricingSection() {
  return (
    <section id="pricing" className="bg-white px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-teal">Pricing</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Choose the stay that feels right for you</h2>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {pricingData.map((item) => (
            <Card key={item.name} className={item.featured ? 'border-brand-teal shadow-soft' : ''}>
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-semibold text-brand-navy">{item.name}</h3>
                {item.featured && <span className="rounded-full bg-brand-coral px-3 py-1 text-sm font-semibold text-brand-navy">favorite</span>}
              </div>
              <p className="mt-4 text-slate-600">{item.description}</p>
              <p className="mt-6 text-4xl font-semibold text-brand-navy">{item.price}</p>
              <ul className="mt-6 space-y-2 text-slate-600">
                {item.features.map((feature) => (
                  <li key={feature}>• {feature}</li>
                ))}
              </ul>
              <Button className="mt-8 w-full"onClick={() => window.open(buildWhatsAppLink(), '_blank')} variant={item.featured ? 'primary' : 'secondary'}>Get in Touch</Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PricingSection;

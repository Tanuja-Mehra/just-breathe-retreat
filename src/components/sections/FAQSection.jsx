import Accordion from '../common/Accordion';
import { faqData } from '../../data/faqData';

function FAQSection() {
  return (
    <section id="faq" className="bg-brand-cream px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-teal">FAQs & terms</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Everything you need to know before booking</h2>
        </div>
        <div className="mt-10 max-w-3xl">
          <Accordion items={faqData} />
        </div>
      </div>
    </section>
  );
}

export default FAQSection;

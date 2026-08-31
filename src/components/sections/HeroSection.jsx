import Button from '../common/Button';
import Badge from '../common/Badge';
import { retreatInfo } from '../../data/retreatInfo';
//import heroImage from '../../../public/assets/images/hero.jpg';

function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden bg-brand-navy text-white">
      {/* <div
        className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{ backgroundImage: `url(${heroImage})` }}
      /> */}
      <div className="relative mx-auto flex max-w-7xl flex-col gap-8 px-6 py-24 lg:flex-row lg:place-items-end lg:justify-between lg:px-8 lg:py-32">
        <div className="max-w-2xl">
          {/* <Badge className="mb-4">Early Bird Offer • Save 15%</Badge> */}
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">{retreatInfo.title}</h1>
          <p className="mt-4 text-lg text-slate-200">{retreatInfo.tagline}</p>
          <p className="mt-3 text-2xl font-semibold">{retreatInfo.dates}</p>
          <p className="mt-2 text-slate-200">{retreatInfo.location}</p>
          {/* <div className="mt-6 flex flex-wrap gap-4">
            <Button variant="primary" onClick={() => window.open(buildWhatsAppLink(), '_blank')}>Reserve Your Spot</Button>
            <Button variant="ghost" className="border-white text-white hover:bg-brand-navy hover:text-brand-navy">View Itinerary</Button>
          </div> */}
        </div>
        {/* <div className="w-full rounded-[2rem] border border-white/20 bg-white/10 p-6 shadow-[0_20px_50px_rgba(15,23,42,0.18)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-brand-teal/60 hover:bg-white/15 lg:max-w-[360px]">
          <p className="mt-3 text-2xl font-semibold">{retreatInfo.dates}</p>
          <p className="mt-2 text-slate-200">{retreatInfo.location}</p>
        </div>  */}
      </div>
    </section>
  );
}

export default HeroSection;

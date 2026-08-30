import Card from '../common/Card';

function HostSection() {
  return (
    <section className="bg-brand-teal px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 rounded-[2rem] border border-slate-200 bg-white/70 p-8 lg:grid-cols-[0.8fr_1.2fr] lg:p-12">
          <div className="flex items-center justify-center">
            <img
              src="assets/gallery/host.jpg"
              alt="Pooja"
              className="h-56 w-56 rounded-full border-4 border-brand-teal object-cover"
            />
          </div>
          <div>
            <p className="text-lg font-bold uppercase tracking-[0.3em]">Meet your host</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl  text-brand-teal">Pooja Bisht</h2>
            <p className="mt-4 text-lg text-slate-600">
             Pooja is an internationally certified yoga instructor. She takes immense
pleasure in the well-being of others. She understands that wellness is not just
physical but a holistic harmony of body, mind, and spirit. Her passion and
expertise are the guiding lights on a healing journey toward a healthier, more
harmonious life. Pooja has lead multiple transformative yoga workshops, yoga
retreats and yoga classes. For her, yoga is a dance of breath and movement. Her
unique teaching style revolves around the synchronization of breath with each
asana (pose), creating a fluid, meditative experience that helps her students to
connect deeply with themselves. Pooja will be guiding you on a profound
voyage towards wellness, self-discovery, and healing.
            </p>
           
          </div>
        </div>
      </div>
    </section>
  );
}

export default HostSection;

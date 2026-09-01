const highlights = [
  { title: 'Yoga Asana', image: 'assets/features/yoga.jpg' },
  { title: 'Kainchi Dham Visit', image: 'assets/features/H_mandir.jpg' },
  { title: 'Lake Kayaking', image: 'assets/features/kayak.jpg' },
  { title: 'Nature Walks', image: 'assets/features/naturewalk.jpg' },
  { title: 'Crochet Workshop', image: 'assets/features/crochet.jpg' },
  { title: 'Yog Nidra', image: 'assets/features/yoga_nidra.jpg' },
  { title: 'Meditation', image: 'assets/features/meditation.jpg' },
  { title: 'Sound Healing', image: 'assets/features/sound.jpg' },
  { title: 'Bonfire Nights', image: 'assets/features/bonfire.jpg' },
  { title: 'Kumaoni Cuisine', image: 'assets/features/meal.jpg' },
];

function HighlightsSection() {
  return (
    <section id="highlights" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-teal">Retreat highlights</p>
        <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">A curated rhythm of breath, beauty, and connection</h2>
      </div>

      <div className="mt-10 grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {highlights.map((item) => (
          <div
            key={item.title}
            className="group relative aspect-square overflow-hidden rounded-xl shadow-md transition-shadow duration-300 hover:shadow-xl"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            <div className="absolute inset-0 flex items-end p-4">
              <h3 className="text-base font-semibold text-white sm:text-lg">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HighlightsSection;

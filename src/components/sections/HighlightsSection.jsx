import { useState } from 'react';

const highlights = [
  { title: 'Yoga Asana', image: 'assets/gallery/yoga2.JPEG', description: 'Gentle movement and energising flows to open the body and calm the mind.' },
  { title: 'Kainchi Dham Visit', image: 'assets/gallery/mandir2.webp', description: 'A serene pilgrimage to one of the region’s most peaceful spiritual landmarks.' },
  { title: 'Lake Kayaking', image: 'assets/gallery/kayak3.jpg', description: 'Slow paddles on glassy waters, surrounded by the Himalayan foothills.' },
  { title: 'Nature Walks', image: 'assets/gallery/walk3.JPG', description: 'Forest trails and quiet viewpoints that invite reflection and grounding.' },
  { title: 'Crochet Workshop', image: 'assets/gallery/crochet1.jpg', description: 'A mindful hands-on session blending creativity, rhythm, and slow living.' },
  { title: 'Yog Nidra', image: 'assets/gallery/yoga nidra1.jpg', description: 'Deep rest and nervous system restoration through guided sleep meditation.' },
  { title: 'Meditation', image: 'assets/gallery/meditation.jpg', description: 'Breath-led stillness and inner listening for a steadier, softer mind.' },
  { title: 'Sound Healing', image: 'assets/gallery/sound1.JPG', description: 'Immersive vibrations and crystal tones that help the body settle into ease.' },
  { title: 'Bonfire Nights', image: 'assets/gallery/bonfire1.jpg', description: 'Evening stories, warm tea, and starlit connection under the open sky.' },
  { title: 'Kumaoni Cuisine', image: 'assets/gallery/meal2.jpg', description: 'Local flavours and nourishing meals that celebrate seasonal abundance.' },
];

function HighlightsSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="highlights" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-teal">Retreat highlights</p>
        <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">A curated rhythm of breath, beauty, and connection</h2>
      </div>

      <div className="mt-10 grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {highlights.map((item, index) => {
          const isHovered = hoveredIndex === index;

          return (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-xl aspect-square cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-300"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-300" />
              
              <div className="absolute inset-0 flex items-end p-4">
                <h3 className={`text-base sm:text-lg font-semibold text-white transition-all duration-500 ease-out transform ${
                  isHovered ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}>
                  {item.title}
                </h3>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default HighlightsSection;

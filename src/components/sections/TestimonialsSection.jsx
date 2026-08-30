import { useState } from 'react';
import Modal from '../common/Modal';
import { testimonialsData } from '../../data/testimonialsData';

function getVideoUrl(src, { autoplay = false, controls = true, loop = false, muted = false } = {}) {
  const url = new URL(src);
  url.searchParams.set('autoplay', autoplay ? '1' : '0');
  url.searchParams.set('controls', controls ? '1' : '0');
  url.searchParams.set('mute', muted ? '1' : '0');
  url.searchParams.set('loop', loop ? '1' : '0');
  url.searchParams.set('rel', '0');
  url.searchParams.set('modestbranding', '1');
  url.searchParams.set('playsinline', '1');
  return url.toString();
}

function TestimonialsSection() {
  const [activeVideo, setActiveVideo] = useState(null);
  const [hoveredVideo, setHoveredVideo] = useState(null);

  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-teal">Guest stories</p>
        <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Transformative journeys from our retreat seekers</h2>
      </div>
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        {testimonialsData.map((testimonial) => {
          const isHovered = hoveredVideo === testimonial.name;
          const previewUrl = getVideoUrl(testimonial.video, {
            autoplay: isHovered,
            controls: false,
            loop: true,
            muted: true,
          });

          return (
            <div
              key={testimonial.name}
              onMouseEnter={() => setHoveredVideo(testimonial.name)}
              onMouseLeave={() => setHoveredVideo(null)}
              onClick={() => setActiveVideo(testimonial)}
              className="flex w-[220px] cursor-pointer flex-col overflow-hidden rounded-[1.3rem] border border-slate-200 bg-brand-cream text-left shadow-soft transition hover:-translate-y-1 hover:shadow-lg sm:w-[240px]"
            >
              <div className="relative aspect-[9/16] w-full overflow-hidden bg-black">
                <iframe
                  src={previewUrl}
                  title={testimonial.name}
                  allow="autoplay; encrypted-media; picture-in-picture"
                  className="pointer-events-none h-full w-full object-cover"
                  loading="lazy"
                  style={{ transform: 'scale(1.08)' }}
                />
                {!isHovered && (
                  <div className="absolute inset-0 flex items-center justify-center bg-slate-900/20 text-2xl text-white sm:text-3xl">
                    ▶
                  </div>
                )}
              </div>
              <div className="flex flex-1 flex-col justify-between p-3 sm:p-4">
                <p className="text-xs font-semibold text-brand-navy sm:text-sm">“{testimonial.quote}”</p>
                <p className="mt-2 text-[9px] font-medium uppercase tracking-[0.2em] text-brand-teal sm:text-[10px]">{testimonial.name}</p>
              </div>
            </div>
          );
        })}
      </div>
      <Modal isOpen={Boolean(activeVideo)} onClose={() => setActiveVideo(null)}>
        {activeVideo && (
          <div className="mx-auto aspect-[9/16] w-full max-w-[420px] overflow-hidden rounded-2xl">
            <iframe
              className="h-full w-full"
              src={getVideoUrl(activeVideo.video, { autoplay: true, controls: true, loop: false, muted: false })}
              title={activeVideo.name}
              allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
              allowFullScreen
            />
          </div>
        )}
      </Modal>
    </section>
  );
}

export default TestimonialsSection;

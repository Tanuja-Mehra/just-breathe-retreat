import { useEffect, useState, useRef } from 'react';
import Slider from 'slick-carousel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { galleryData } from '../../data/galleryData';

const filters = ['All',  'Yoga', 'Kayaking', 'walk', 'Meals','Workshop', 'Bonfire', 'TempleVisit'];

function GallerySection() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [zoomed, setZoomed] = useState(false);
  const sliderRef = useRef(null);

  const visibleImages = galleryData.filter((item) => activeFilter === 'All' || item.tag === activeFilter);

  useEffect(() => {
    setCurrentIndex(0);
    setZoomed(false);
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(0);
    }
  }, [activeFilter]);

  useEffect(() => {
    if (!visibleImages.length) return;
    if (currentIndex >= visibleImages.length) {
      setCurrentIndex(0);
    }
  }, [visibleImages, currentIndex]);

  const currentImage = visibleImages[currentIndex] ?? null;

  const slickSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    beforeChange: (current, next) => setCurrentIndex(next),
    arrows: false,
  };

  return (
    <section id="gallery" className="bg-brand-cream px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-teal">Gallery</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">A glimpse into previous retreats</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${activeFilter === filter ? 'bg-brand-navy text-white' : 'bg-white text-brand-navy'}`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {visibleImages.length > 0 ? (
          <div className="mt-10 overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-4 shadow-soft sm:p-6">
            <div className="relative">
              <Slider ref={sliderRef} {...slickSettings}>
                {visibleImages.map((item, index) => (
                  <div key={`${item.title}-${index}`} className="block w-full overflow-hidden rounded-[1.5rem]">
                    <button
                      type="button"
                      onClick={() => setSelectedImage(item)}
                      className="block w-full"
                      aria-label={`View ${item.title} in full size`}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-[380px] w-full object-cover transition duration-300 hover:scale-[1.02] sm:h-[500px]"
                      />
                    </button>
                  </div>
                ))}
              </Slider>

              <button
                type="button"
                onClick={() => sliderRef.current?.slickPrev()}
                className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-xl font-semibold text-brand-navy shadow-md transition hover:bg-white"
                aria-label="Previous image"
              >
                ←
              </button>

              <button
                type="button"
                onClick={() => sliderRef.current?.slickNext()}
                className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-xl font-semibold text-brand-navy shadow-md transition hover:bg-white"
                aria-label="Next image"
              >
                →
              </button>
            </div>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-teal">{currentImage.tag}</p>
                <h3 className="mt-1 text-xl font-semibold text-brand-navy">{currentImage.title}</h3>
              </div>

              <button
                type="button"
                onClick={() => setSelectedImage(currentImage)}
                className="inline-flex w-fit items-center justify-center rounded-full bg-brand-navy px-4 py-2 text-sm font-medium text-white transition hover:bg-brand-teal"
              >
                View full size
              </button>
            </div>

            <div className="mt-5 flex gap-3 overflow-x-auto pb-2">
              {visibleImages.map((item, index) => (
                <button
                  key={`${item.title}-${index}`}
                  type="button"
                  onClick={() => setCurrentIndex(index)}
                  className={`shrink-0 overflow-hidden rounded-2xl border-2 transition ${index === currentIndex ? 'border-brand-teal' : 'border-transparent'}`}
                  aria-label={`Show image ${item.title}`}
                >
                  <img src={item.image} alt={item.title} className="h-20 w-24 object-cover sm:h-24 sm:w-28" />
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="mt-10 rounded-[1.5rem] border border-dashed border-slate-300 bg-white/50 p-6 text-slate-500">
            No images available for this category.
          </div>
        )}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/75 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative w-full max-w-5xl overflow-hidden rounded-[2rem] bg-white p-3 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-xl text-brand-navy shadow-md"
              aria-label="Close full view"
            >
              ×
            </button>

            <div className="max-h-[80vh] overflow-hidden rounded-[1.5rem] bg-slate-100">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className={`h-[70vh] w-full object-contain transition-transform duration-300 ${zoomed ? 'scale-150' : 'scale-100'}`}
              />
            </div>

            <div className="mt-4 flex items-center justify-between gap-3">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-teal">{selectedImage.tag}</p>
                <h3 className="mt-1 text-lg font-semibold text-brand-navy">{selectedImage.title}</h3>
              </div>

              <button
                type="button"
                onClick={() => setZoomed((prev) => !prev)}
                className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-brand-navy transition hover:border-brand-teal hover:text-brand-teal"
              >
                {zoomed ? 'Zoom out' : 'Zoom in'}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default GallerySection;

import { useState, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { galleryData } from '../../data/galleryData';

function GallerySection() {
  const [selectedImage, setSelectedImage] = useState(null);
  const sliderRef = useRef(null);

  const slickSettings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
  };

  return (
    <section id="gallery" className="bg-brand-cream px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-teal">Gallery</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">A glimpse into previous retreats</h2>
        </div>

        {galleryData.length > 0 ? (
          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-3 shadow-soft sm:p-5">
            <Slider ref={sliderRef} {...slickSettings}>
              {galleryData.map((item, index) => (
                <div key={`${item.title}-${index}`} className="outline-none">
                  <button
                    type="button"
                    onClick={() => setSelectedImage(item)}
                    className="block w-full cursor-pointer overflow-hidden rounded-[1.5rem]"
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
              className="absolute left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-xl font-semibold text-brand-navy shadow-md transition hover:bg-white"
              aria-label="Previous image"
            >
              ←
            </button>

            <button
              type="button"
              onClick={() => sliderRef.current?.slickNext()}
              className="absolute right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-xl font-semibold text-brand-navy shadow-md transition hover:bg-white"
              aria-label="Next image"
            >
              →
            </button>
          </div>
        ) : (
          <div className="mt-6 rounded-[1.5rem] border border-dashed border-slate-300 bg-white/50 p-6 text-slate-500">
            No images available.
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
                className="h-[70vh] w-full object-contain"
              />
            </div>

            <div className="mt-4">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-teal">{selectedImage.tag}</p>
              <h3 className="mt-1 text-lg font-semibold text-brand-navy">{selectedImage.title}</h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default GallerySection;

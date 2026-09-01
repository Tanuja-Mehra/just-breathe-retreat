import Card from '../common/Card';
import { retreatInfo } from '../../data/retreatInfo';

const locationImages = [
  { src: 'assets/location/location.JPG', alt: 'Lake view at Naukuchiatal' },
  { src: 'assets/location/location1.jpg', alt: 'Scenic hill view in the retreat area' },
  { src: 'assets/location/location2.jpg', alt: 'Nature and water setting around the retreat' },
  { src: 'assets/location/location3.jpg', alt: 'Peaceful lakeside landscape' },
];

function LocationSection() {
  return (
    <section id="location" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
        <div>
          <p className="text-lg font-bold uppercase tracking-[0.3em]">Location</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl text-brand-teal"> {retreatInfo.location}</h2>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">
            Naukuchiatal, a picturesque town in the Kumaon region of Uttarakhand. It is a hidden
            paradise better known for its enchanting lake, verdant landscapes, and a peaceful
            ambience. The name "Naukuchiatal" literally translates to the "Lake of Nine Corners,"
            and it's famous for the unique shape of its pristine lake, which indeed appears to have
            nine corners when viewed from different angles.
          </p>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">
            Wake to alpine air, gentle mist, and panoramic views across the lake as you settle into a week of breath, beauty, and deep rest.
          </p>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            {locationImages.slice(0, 2).map((image) => (
              <img
                key={image.alt}
                src={image.src}
                alt={image.alt}
                className="h-44 w-full rounded-[1.5rem] object-cover shadow-soft sm:h-56"
              />
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4">
            {locationImages.slice(2).map((image) => (
              <img
                key={image.alt}
                src={image.src}
                alt={image.alt}
                className="h-44 w-full rounded-[1.5rem] object-cover shadow-soft sm:h-56"
              />
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default LocationSection;

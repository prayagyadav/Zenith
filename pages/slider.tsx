import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

export const sliderData = [
    {
      id: 3,
      title: "Visualization of a CMS event",
      url: "/img/carousel/CMS_event.jpg",
    },
    {
      id: 2,
      title: "LHC tunnel",
      url: "/img/carousel/tunnel.webp",
    },
    {
      id: 1,
      title: "The Compact Muon Solenoid (CMS)",
      url: "/img/carousel/cms.jpg",
    }
  ];

export default function Slider() {
  const [emblaRef] = useEmblaCarousel({ loop: true}, [Autoplay({delay: 7000})]);

  return (
    <>
    <div
      className="overflow-hidden m-2 bg-gray-200 w-full mx-auto flex items-center justify-center h-auto rounded"
      ref={emblaRef}>
      <div className="flex">
        {sliderData?.map((item) => {
          return (
            <div className="embla__slide relative h-auto w-full" key={item.id}>

                {/* the image */}
              <img className="w-full h-auto" src={item.url} alt=""  />

              {/* title/subtitle */}
              <h3 className="absolute top-1/2 left-1/2 w-full md:w-auto transform -translate-x-1/2 translate-y-[3rem] md:translate-y-[9rem]  lg:translate-y-48 bg-cyan-600 py-2 lg:py-4 px-2 lg:px-8 text-sm lg:text-sm text-white font-extrabold">
                {item.title}
              </h3>
            </div>
          );
        })}
      </div>
    </div>
    </>
  );
}
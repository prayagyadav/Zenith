import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

export const sliderData = [
    {
      id: 1,
      title: "Foundation Day",
      url: "/img/carousel/1_carousel_copy.jpeg",
    },
    {
      id: 2,
      title: "Foundation Day",
      url: "/img/carousel/2_carousel_copy.jpeg",
    },
    {
      id: 3,
      title: "Foundation Day",
      url: "/img/carousel/3_carousel_copy.jpeg",
    },
    {
      id: 4,
      title: "Foundation Day",
      url: "/img/carousel/4_carousel_copy.jpeg",
    },
    {
      id: 5,
      title: "Foundation Day",
      url: "/img/carousel/5_carousel_copy.jpeg",
    },
    {
      id: 6,
      title: "Inauguration day",
      url: "/img/carousel/inauguration.JPG",
    },
    {
      id: 7,
      title: "Inauguration day",
      url: "/img/carousel/dean_vc.JPG",
    }
  ];

export default function Slider() {
  const [emblaRef] = useEmblaCarousel({ loop: true}, [Autoplay({delay: 5000})]);

  return (
    <>
    <div
      className="overflow-hidden m-4 bg-gray-200 w-full mx-auto flex items-center justify-center h-auto rounded"
      ref={emblaRef}>
      <div className="flex">
        {sliderData?.map((item) => {
          return (
            <div className="embla__slide relative h-auto w-full" key={item.id}>

                {/* the image */}
              <img className="w-full h-auto" src={item.url} alt=""  />

              {/* title/subtitle */}
              <h3 className="absolute top-1/2 left-1/2 w-full md:w-auto transform -translate-x-1/2 translate-y-[3rem] md:translate-y-[9rem]  lg:translate-y-64 py-2 lg:py-4 px-2 lg:px-8 text-sm lg:text-sm backdrop-brightness-50 text-white font-semibold italic">
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
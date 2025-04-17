import Image from "next/image";

export default function StandardImage({ src, alt }) {
  return (
    <>
      <a href={src}>
        <Image
          src={src}
          alt={alt}
          width={500}
          height={500}
          className="rounded-2xl w-full h-auto"
        />
      </a>
    </>
  );
}

import Image from "next/image";

export default function HeraldButton({ link }) {
  return (
    <>
      <div className="transition-all duration-150 flex hover:translate-x-2 m-2">
        <div className="text-[#d0202a] text-right w-24">
          Jump to the Article ↗️
        </div>
        <a href={link}>
          <Image
            src="/img/uoh_herald.png"
            alt="Link to UOH Herald Article"
            width={100}
            height={100}
          />
        </a>
      </div>
    </>
  );
}

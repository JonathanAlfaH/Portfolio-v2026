import Image from "next/image";

export default function Icon({
  size,
  name,
}: Readonly<{ size: number; name: string }>) {
  return (
    <div className={`group flex flex-col items-center justify-center gap-2`}>
      <Image
        src={`/icons/${name}.svg`}
        width={size}
        height={size}
        alt={name}
        className="transition-transform duration-300 ease-out group-hover:scale-110 group-hover:-translate-y-5"
      />
      <span className="text-2xl font-bold text-center uppercase transition-transform duration-300 ease-out group-hover:-translate-y-3">
        {name}
      </span>
    </div>
  );
}

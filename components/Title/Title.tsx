export default function Title({
  title,
}: Readonly<{ title: string }>) {
  return (
    <h1
      className="
        font-bold uppercase text-transparent
        [-webkit-text-stroke:1px_#FF5F57]

        text-5xl
        sm:text-6xl
        md:text-8xl

        leading-none
        select-none
      "
    >
      {title}
    </h1>
  );
}

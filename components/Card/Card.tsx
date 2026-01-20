"use client";
import Image from "next/image";
import { useState } from "react";

type CardProps = {
  alt: string;
  image: string;
  size: number;
  description: string;
  technologies: string[];
  activities: string[];
};

export default function Card({
  alt,
  image,
  size,
  description,
  technologies,
  activities,
}: CardProps) {
  const [open, setOpen] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);

  const handleOpen = () => {
    setOpen(true);
    requestAnimationFrame(() => setAnimateIn(true));
  };

  const handleClose = () => {
    setAnimateIn(false);
    setTimeout(() => setOpen(false), 200);
  };

  return (
    <>
      <div
        onClick={handleOpen}
        className={`rounded-3xl bg-[#1B165E] flex h-full items-center justify-center shadow-lg p-6 transition-transform duration-200
          ${open ? "opacity-0 pointer-events-none scale-95" : "cursor-pointer hover:scale-105"}`}
      >
        <Image src={image} height={size} width={size} alt={alt}/>
      </div>

      {open && (
        <>
          <div
            onClick={handleClose}
            className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300
              ${animateIn ? "opacity-100" : "opacity-0"}`}
          />

          <div className="fixed pointer-events-none inset-0 z-50 flex items-center justify-center p-4">
            <div
              onClick={(e) => e.stopPropagation()}
              className={`relative bg-[#1B165E] rounded-3xl shadow-2xl w-full max-w-5xl max-h-[90vh]
                transform transition-all duration-300
                ${animateIn ? "scale-100 opacity-100" : "scale-95 opacity-0"}
                flex flex-col md:flex-row overflow-hidden`}
            >
              <div className="flex items-center justify-center p-6 md:w-1/2">
                <Image
                  src={image}
                  width={size / 1.5}
                  height={size / 1.5}
                  alt={alt}
                  className="w-40 sm:w-52 md:w-72 h-auto"
                />
              </div>

              <div className="text-white p-6 md:p-8 md:w-1/2 overflow-y-auto">
                <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center md:text-left">
                  {alt}
                </h2>

                <span className="block text-sm text-white/70 mb-4 text-center md:text-left">
                  {technologies.join(" / ")}
                </span>

                <p className="text-sm md:text-base text-white/90 mb-4">
                  {description}
                </p>

                <ul className="list-disc pl-5 space-y-2 text-sm md:text-base">
                  {activities.map((activity, i) => (
                    <li key={i}>{activity}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

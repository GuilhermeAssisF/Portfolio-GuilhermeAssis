// src/app/(portfolio)/linkbios/page.tsx
"use client";
import React, { useRef } from "react";
import { LinkbioCard } from "@/components/ui/linkbio-card";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

export default function LinkbiosPage() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  // Refs para gerenciar o estado do "arrastar para rolar"
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeftStart = useRef(0);

  const linkbios = [
    {
      src: "/img_projetos/linkbio_1.png",
      title: "Meu Linkbio",
      stats: "Meu linkbio pessoal",
      href: "https://linkbio-giloart.vercel.app/",
    },
    {
      src: "/img_projetos/frontend_1.png",
      title: "Acervo Escolar",
      stats: "Tecnologias: React, Prismic.io",
      href: "#",
    },
    {
      src: "/img_projetos/backend_1.png",
      title: "Sistema de Transportes",
      stats: "Tecnologias: Java, Spring Boot",
      href: "#",
    },
    {
      src: "/img_projetos/backend_2.png",
      title: "Controle de Atendimento",
      stats: "Tecnologias: Java, JSP",
      href: "#",
    },
    {
      src: "/img_projetos/backend_3.png",
      title: "Login de Sistema",
      stats: "Tecnologias: Java, Swing",
      href: "#",
    },
  ];

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };
  
  // Handlers para o evento de arrastar do mouse
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const slider = scrollContainerRef.current;
    if (!slider) return;
    isDown.current = true;
    startX.current = e.pageX - slider.offsetLeft;
    scrollLeftStart.current = slider.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDown.current = false;
  };

  const handleMouseUp = () => {
    isDown.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const slider = scrollContainerRef.current;
    if (!isDown.current || !slider) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX.current); // Multiplicador opcional: * 2 para rolagem mais rápida
    slider.scrollLeft = scrollLeftStart.current - walk;
  };

  return (
    <>
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
      <div className="flex flex-1 flex-col p-4 md:p-10 h-full overflow-y-auto">
        <div className="flex justify-between items-center mb-6 flex-shrink-0">
          <h1 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200">
            Linkbios Desenvolvidos
          </h1>
          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              className="p-2 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors duration-300 cursor-emoji"
              aria-label="Rolar para a esquerda"
            >
              <IconChevronLeft className="h-5 w-5 text-neutral-600 dark:text-neutral-300" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-2 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors duration-300 cursor-emoji"
              aria-label="Rolar para a direita"
            >
              <IconChevronRight className="h-5 w-5 text-neutral-600 dark:text-neutral-300" />
            </button>
          </div>
        </div>
        <div
          ref={scrollContainerRef}
          className="scrollbar-hide flex-1 flex overflow-x-auto gap-6 pb-4 select-none cursor-grab active:cursor-grabbing"
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {linkbios.map((bio, index) => (
            <div key={index} className="flex-none w-full sm:w-1/2 md:w-1/3 lg:w-1/4 h-full">
              <LinkbioCard
                src={bio.src}
                title={bio.title}
                stats={bio.stats}
                href={bio.href}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
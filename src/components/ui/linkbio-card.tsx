// src/components/ui/linkbio-card.tsx
"use client";
import React from "react";
import Image from "next/image";
import { IconArrowRight } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

interface LinkbioCardProps {
  src: string;
  title: string;
  stats: string;
  href: string;
  className?: string;
}

export const LinkbioCard = ({ src, title, stats, href, className }: LinkbioCardProps) => {
  return (
    // O elemento raiz agora é uma div, removendo o link do card inteiro
    <div
      className={cn(
        "group relative block w-full h-full overflow-hidden rounded-2xl shadow-lg",
        className
      )}
    >
      <Image
        src={src}
        alt={title}
        fill
        className="object-cover object-top w-full h-full transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
      <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
        <div>
          <h3 className="text-2xl font-bold tracking-tight">{title}</h3>
          <p className="text-sm text-white/80 mt-1">{stats}</p>
        </div>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 bg-white/10 backdrop-blur-sm p-3 rounded-lg flex items-center justify-between group/button transition-all duration-300 hover:bg-white/20 cursor-emoji"
        >
          <span className="text-sm font-medium">Visitar Linkbio</span>
          <IconArrowRight className="h-5 w-5 transition-transform duration-300 group-hover/button:translate-x-1" />
        </a>
      </div>
    </div>
  );
};
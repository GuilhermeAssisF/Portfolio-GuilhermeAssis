"use client";
import React from "react";
import Image from "next/image";
import { IconBrandGithub } from "@tabler/icons-react";

interface ProjectCardProps {
  src: string;
  title: string;
  description: string;
  href: string;
}

export const ProjectCard = ({ src, title, description, href }: ProjectCardProps) => {
  return (
    <div className="group relative block w-full h-full p-4 overflow-hidden bg-neutral-50 dark:bg-neutral-800 border border-black/[0.1] dark:border-white/[0.2] rounded-2xl flex flex-col">
      <div className="relative h-48 w-full rounded-lg overflow-hidden mb-4">
        <Image
          src={src}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-neutral-800 dark:text-neutral-200">{title}</h3>
        <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400 flex-grow">{description}</p>
      </div>
      <div className="mt-4">
        <a 
          href={href} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="w-full inline-block"
        >
          <button className="w-full px-4 py-2 rounded-lg bg-neutral-200 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300 text-sm font-medium hover:bg-neutral-300 dark:hover:bg-neutral-600 transition-colors duration-300">
            <div className="flex items-center justify-center gap-2">
              <IconBrandGithub className="h-4 w-4" />
              <span>Ver no Github</span>
            </div>
          </button>
        </a>
      </div>
    </div>
  );
};

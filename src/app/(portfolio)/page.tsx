"use client";
import React from "react";
import Image from "next/image";
import { WobbleCard } from "@/components/ui/wobble-card";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandInstagram,
} from "@tabler/icons-react";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col p-4 md:p-10">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6 flex-shrink-0">
        <h1 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200">
          Bem-vindo ao meu Portfólio
        </h1>
        <div className="flex items-center gap-4">
          <a href="#" aria-label="Github" className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100">
            <IconBrandGithub className="h-6 w-6" />
          </a>
          <a href="#" aria-label="LinkedIn" className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100">
            <IconBrandLinkedin className="h-6 w-6" />
          </a>
          <a href="#" aria-label="Instagram" className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100">
            <IconBrandInstagram className="h-6 w-6" />
          </a>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 w-full">
        {/* Card Vertical na Esquerda (Sobre) */}
        <WobbleCard
          containerClassName="group col-span-1 md:row-span-2 bg-indigo-800"
          className="h-full"
        >
          <div className="relative h-full">
            <div className="relative z-10">
              <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Sobre Mim
              </h2>
              <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
                Conheça minha jornada, minhas habilidades e as tecnologias com as quais trabalho.
              </p>
            </div>
            <Image
              src="/img/boneco_guilherme_1.png"
              width={500}
              height={500}
              alt="Avatar de Guilherme Assis"
              className="absolute object-contain -bottom-60 -right-20 md:-right-0 lg:-right-0 transition-transform duration-500 ease-in-out group-hover:-translate-y-4"
            />
          </div>
        </WobbleCard>
        {/* Card Largo Superior (Projetos) */}
        <WobbleCard
          containerClassName="group col-span-1 md:col-span-2 bg-pink-800"
        >
          <div className="relative h-full">
            <div className="relative z-10 max-w-xs">
              <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Explore Meus Projetos
              </h2>
              <p className="mt-4 text-left text-base/6 text-neutral-200">
                Navegue pelos projetos que desenvolvi, desde aplicações web a soluções mobile.
              </p>
            </div>
            <Image
                src="/img/computador_sistema.png"
                width={380}
                height={380}
                alt="Computador exibindo um sistema"
                className="absolute object-contain -right-10 -bottom-36 md:-right-4 transition-transform duration-500 ease-in-out group-hover:rotate-3 -scale-x-100"
              />
          </div>
        </WobbleCard>
        {/* Card Inferior 1 (Serviços) */}
        <WobbleCard
          containerClassName="group col-span-1 bg-sky-800"
        >
          <div className="relative h-full">
              <div className="relative z-10 max-w-xs">
                  <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                      Serviços que Ofereço
                  </h2>
                  <p className="mt-4 text-left text-base/6 text-neutral-200">
                      Desenvolvimento de software, consultoria e soluções personalizadas para o seu negócio.
                  </p>
              </div>
               <Image
                    src="/img/dev_png.png"
                    width={380}
                    height={380}
                    alt="Ícone de desenvolvimento"
                    className="absolute object-contain -right-30 -bottom-55 opacity-8 transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
          </div>
        </WobbleCard>
        {/* Card Inferior 2 (Contato) */}
          <WobbleCard containerClassName="col-span-1 bg-emerald-800">
            <div>
              <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Entre em Contato
              </h2>
              <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
                Vamos conversar! Envie uma mensagem para iniciarmos um novo projeto juntos.
              </p>
            </div>
            <Image
                src="/img/aviao.png"
                width={380}
                height={380}
                alt="Ícone de desenvolvimento"
                className="absolute object-contain -right-10 -bottom-25 opacity-9 transition-transform duration-500 ease-in-out group-hover:scale-105 -scale-x-100"
              />
          </WobbleCard>
      </div>
    </div>
  );
}

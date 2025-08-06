"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { WobbleCard } from "@/components/ui/wobble-card";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandInstagram,
  IconBrandWhatsapp, // Ícone importado
} from "@tabler/icons-react";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col p-4 md:p-10 h-full overflow-y-auto">
      <div className="flex justify-between items-center mb-6 flex-shrink-0">
        <h1 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200">
          Bem-vindo ao meu Portfólio
        </h1>
        <div className="flex items-center gap-4">
          {/* Ícone do WhatsApp adicionado aqui */}
          <a 
            // IMPORTANTE: Substitua SEUNUMERO pelo seu número com código do país (ex: 5511999999999)
            href="https://wa.me/5535999665912" 
            target="_blank" 
            aria-label="WhatsApp" 
            className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100"
          >
            <IconBrandWhatsapp className="h-6 w-6" />
          </a>
          <a href="https://github.com/GuilhermeAssisF" target="_blank" aria-label="Github" className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100">
            <IconBrandGithub className="h-6 w-6" />
          </a>
          <a href="https://www.linkedin.com/in/guilherme-assis-1115a0274/" target="_blank" aria-label="LinkedIn" className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100">
            <IconBrandLinkedin className="h-6 w-6" />
          </a>
          <a href="https://www.instagram.com/gilo_art/" target="_blank" aria-label="Instagram" className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100">
            <IconBrandInstagram className="h-6 w-6" />
          </a>
        </div>
      </div>

      <div className="flex-1 grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 w-full">
        <Link 
          href="/sobre" 
          aria-label="Navegar para a página Sobre Mim"
          className="col-span-1 md:row-span-2"
        >
          <WobbleCard
            containerClassName="group bg-indigo-800 h-full cursor-emoji"
            className="h-full"
          >
            <div className="relative h-full" >
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
                className="absolute object-contain -bottom-70 -right-24 opacity-12 transition-transform duration-500 ease-in-out group-hover:-translate-y-4 md:-bottom-60 md:-right-20 md:opacity-100 lg:-right-0"
              />
            </div>
          </WobbleCard>
        </Link>
        
        <Link 
          href="/projetos" 
          aria-label="Navegar para a página de Projetos"
          className="col-span-1 md:col-span-2"
        >
          <WobbleCard
            containerClassName="group bg-pink-800 h-full cursor-emoji"
            className="h-full"
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
                  className="absolute object-contain -right-16 -bottom-40 opacity-8 transition-transform duration-500 ease-in-out group-hover:rotate-3 -scale-x-100 md:-right-10 md:-bottom-36 md:opacity-100 lg:-right-4"
                />
            </div>
          </WobbleCard>
        </Link>

        <Link 
          href="/servicos" 
          aria-label="Navegar para a página de Serviços"
          className="col-span-1"
        >
          <WobbleCard
            containerClassName="group bg-sky-800 h-full cursor-emoji"
            className="h-full"
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
                    className="absolute object-contain -right-20 -bottom-80 opacity-8 transition-transform duration-500 ease-in-out group-hover:scale-105 md:-right-20 md:-bottom-55"
                />
            </div>
          </WobbleCard>
        </Link>

        <Link 
          href="/contato" 
          aria-label="Navegar para a página de Contato"
          className="col-span-1"
        >
          <WobbleCard 
            containerClassName="group bg-emerald-800 h-full cursor-emoji"
            className="h-full"
          >
            <div className="relative h-full">
              <div className="relative z-10">
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
                  alt="Avião de papel"
                  className="absolute object-contain -right-15 -bottom-50 opacity-9 transition-transform duration-500 ease-in-out group-hover:-translate-x-2 group-hover:translate-y-2 -scale-x-100"
                />
            </div>
          </WobbleCard>
        </Link>
      </div>
    </div>
  );
}

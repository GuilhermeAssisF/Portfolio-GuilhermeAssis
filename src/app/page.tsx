"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { WobbleCard } from "@/components/ui/wobble-card";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import {
  IconHome,
  IconBriefcase,
  IconUser,
  IconTool,
  IconMail,
  IconBrandGithub,
  IconBrandLinkedin,
  IconSun,
  IconMoon,
  IconBrandInstagram,
} from "@tabler/icons-react";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const links = [
    {
      label: "Home",
      href: "#",
      icon: (
        <IconHome className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Projetos",
      href: "#",
      icon: (
        <IconBriefcase className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Sobre",
      href: "#",
      icon: (
        <IconUser className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Serviços",
      href: "#",
      icon: (
        <IconTool className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
     {
      label: "Contato",
      href: "#",
      icon: (
        <IconMail className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
  ];

  return (
    <main
      className={`flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-900 w-full h-screen overflow-hidden`}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto">
             <div className="flex-shrink-0">
               <span className="px-2 text-xs font-semibold text-gray-500 uppercase">
                 {open ? "Menu" : "M"}
               </span>
             </div>
            <nav className="mt-4 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </nav>
          </div>
          <div>
            <button
              onClick={toggleTheme}
              className="flex items-center justify-start gap-2 group/sidebar py-2 w-full cursor-pointer"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <IconSun className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
              ) : (
                <IconMoon className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
              )}
              <motion.span
                animate={{
                  display: open ? "inline-block" : "none",
                  opacity: open ? 1 : 0,
                }}
                className="text-neutral-700 dark:text-neutral-200 text-sm group-hover/sidebar:translate-x-1 transition duration-150 whitespace-pre inline-block !p-0 !m-0"
              >
                Tema
              </motion.span>
            </button>
            <SidebarLink
              link={{
                label: "Guilherme Assis",
                href: "#",
                icon: (
                  <Image
                    src="/img/1728762062177.jpg"
                    className="h-7 w-7 flex-shrink-0 rounded-full"
                    width={50}
                    height={50}
                    alt="Avatar"
                  />
                ),
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>
      
      {/* Main Content Area */}
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
              <IconBrandInstagram className="h-6.5 w-6.5" />
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
    </main>
  );
}

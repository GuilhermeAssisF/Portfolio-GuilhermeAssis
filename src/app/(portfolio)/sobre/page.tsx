"use client";
import React from "react";
import Image from "next/image";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandInstagram,
  IconFileCv,
  IconBrandReact,
  IconBrandNextjs,
  IconBrandTailwind,
  IconBrandFigma,
  IconBrandTypescript,
  IconCoffee,
  IconLeaf,
  IconDatabase,
  IconBrandHtml5,
  IconBrandWhatsapp, // Ícone importado
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";

const SectionCard = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="bg-neutral-50 dark:bg-neutral-800/50 p-6 rounded-2xl border border-black/[0.1] dark:border-white/[0.2]">
    <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">{title}</h2>
    {children}
  </div>
);

const TechIcon = ({ icon: Icon, name, hoverColor }: { icon: React.ElementType; name: string; hoverColor?: string }) => (
  <div className={cn("flex flex-col items-center gap-2 text-neutral-600 dark:text-neutral-400 transition-colors duration-300 group", hoverColor)}>
    <Icon className="h-8 w-8 transition-transform duration-300 group-hover:scale-110" />
    <span className="text-xs">{name}</span>
  </div>
);

const TimelineItem = ({ title, subtitle, date, description }: { title: string; subtitle: string; date: string; description: string }) => (
    <div className="relative pl-6 pb-8 border-l border-neutral-200 dark:border-neutral-700 last:border-l-transparent last:pb-0">
        <div className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-neutral-400 dark:bg-neutral-500"></div>
        <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-1">{date}</p>
        <h3 className="font-semibold text-neutral-900 dark:text-neutral-100">{title}</h3>
        <h4 className="text-sm text-neutral-700 dark:text-neutral-300 mb-2">{subtitle}</h4>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">{description}</p>
    </div>
);


export default function SobrePage() {

  const techs = [
    { name: "Java", icon: IconCoffee, hoverColor: "hover:text-orange-500 dark:hover:text-orange-500"},
    { name: "Spring", icon: IconLeaf, hoverColor: "hover:text-green-500 dark:hover:text-green-500"},
    { name: "SQL", icon: IconDatabase, hoverColor: "hover:text-blue-500 dark:hover:text-blue-500"},
    { name: "TypeScript", icon: IconBrandTypescript, hoverColor: "hover:text-blue-400 dark:hover:text-blue-400"},
    { name: "React", icon: IconBrandReact, hoverColor: "hover:text-sky-400 dark:hover:text-sky-400"},
    { name: "Next.js", icon: IconBrandNextjs, hoverColor: "hover:text-black dark:hover:text-white dark:"},
    { name: "HTML5", icon: IconBrandHtml5, hoverColor: "hover:text-orange-600 dark:hover:text-orange-600"},
    { name: "Tailwind", icon: IconBrandTailwind, hoverColor: "hover:text-cyan-500 dark:hover:text-cyan-500"},
    { name: "Figma", icon: IconBrandFigma, hoverColor: "hover:text-pink-500 dark:hover:text-pink-500"},
  ];

  return (
    <div className="flex flex-1 flex-col p-4 md:p-10 h-full overflow-y-auto">
      <section className="flex flex-col md:flex-row items-center gap-8 mb-10">
        <div className="relative w-32 h-32 md:w-40 md:h-40 flex-shrink-0">
          <Image
            src="/img/1728762062177.jpg"
            alt="Foto de Guilherme Assis"
            fill
            className="rounded-full object-cover border-4 border-white dark:border-neutral-700 shadow-lg"
          />
        </div>
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-neutral-800 dark:text-neutral-200">
            Guilherme Assis
          </h1>
          <p className="mt-2 text-neutral-600 dark:text-neutral-400 max-w-xl">
            Desenvolvedor Full-Stack apaixonado por criar soluções inovadoras e interfaces intuitivas. Com experiência em React, Next.js e Java, transformo ideias em realidade digital.
          </p>
          <div className="mt-4 flex items-center gap-4">
            <a href="https://docs.google.com/document/d/1W1WCqgV_aEPAkgndblwSVrxxJYnITizL07xnSoj_eQQ/edit?usp=sharing">
              <button className="px-4 py-2 rounded-lg bg-neutral-200 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300 text-sm font-medium hover:bg-neutral-300 dark:hover:bg-neutral-600 transition-colors duration-300">
                <div className="flex items-center gap-2">
                  <IconFileCv className="h-4 w-4" />
                  <span>Download CV</span>
                </div>
              </button>
            </a>
            <div className="flex items-center gap-3">
              {/* Ícone do WhatsApp adicionado aqui */}
              <a 
                // IMPORTANTE: Substitua SEUNUMERO pelo seu número com código do país (ex: 5511999999999)
                href="https://wa.me/5535999665912" 
                target="_blank" 
                aria-label="WhatsApp" 
                className="text-neutral-500 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-100"
              >
                <IconBrandWhatsapp />
              </a>
              <a href="https://github.com/GuilhermeAssisF" target="_blank" aria-label="Github" className="text-neutral-500 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-100">
                <IconBrandGithub />
              </a>
              <a href="https://www.linkedin.com/in/guilherme-assis-1115a0274/" target="_blank" aria-label="LinkedIn" className="text-neutral-500 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-100">
                <IconBrandLinkedin />
              </a>
              <a href="https://www.instagram.com/gilo_art/" target="_blank" aria-label="Instagram" className="text-neutral-500 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-100">
                <IconBrandInstagram />
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="space-y-8 group/sections">
        <div className="transition-all duration-300 group-hover/sections:opacity-50 hover:!opacity-100 hover:scale-105">
            <SectionCard title="Minha Stack">
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-6">
            {techs.map((tech) => (
              <TechIcon key={tech.name} icon={tech.icon} name={tech.name} hoverColor={tech.hoverColor} />
            ))}
          </div>
        </SectionCard>
        </div>

        <div className="transition-all duration-300 group-hover/sections:opacity-50 hover:!opacity-100 hover:scale-105">
            <SectionCard title="Resumo Porfissional">
                <p className="mt-2 text-neutral-600 dark:text-neutral-400">Experiência de 02 anos em desenvolvimento de sistemas, atuando tanto no front-end (como no desenvolvimento de um Acervo Online para uma instituição pública) quanto no back-end (desenvolvimento de um CRUD Manager Web em Java).<br/><br/>
                  Atuação nas tecnologias: HTML, CSS, TypeScript, Next, React, MySQL, Java, Python. Atualmente em processo de especialização em Java com Spring Framework.<br/><br/>
                  Além da área de tecnologia, possuo experiência na área administrativa e no setor financeiro, com gestão de dados, controle financeiro e otimização de processos.<br/><br/>
                  Cursando 6º período de Sistemas de Informação em transição de carreira e apaixonado por tecnologia.
                </p>
            </SectionCard>
        </div>

        <div className="transition-all duration-300 group-hover/sections:opacity-50 hover:!opacity-100 hover:scale-105">
            <SectionCard title="Experiência Profissional">
                <TimelineItem 
                    title="Desenvolvedor Freelancer"
                    subtitle="Gilo Art Developer"
                    date="2024 - Presente"
                    description="Desenvolvimento e manutenção de sistemas web para empresas com Java e Spring, criação de páginas dinâmicas com react.js utilizando next e prismic.io para influenciadores, projetos voluntários para ongs, comércios e a criação de linkbios personalizados."
                />
                <TimelineItem 
                    title="Gerente Administrativo Financeiro"
                    subtitle="FF Transportes"
                    date="2022 - Presente"
                    description="Atuação com Pacote Office na organização e gerenciamento de dados, atuando desde na área financeira e facilitando a busca e visualização de informações necessárias no dia a dia da empresa, otimizando processos internos."
                />
            </SectionCard>
        </div>

        <div className="transition-all duration-300 group-hover/sections:opacity-50 hover:!opacity-100 hover:scale-105">
            <SectionCard title="Formação Académica">
                <TimelineItem 
                    title="Sistemas de Informação"
                    subtitle="Instituto Federal de Educação, Ciência e Tecnologia do Sul de Minas"
                    date="2023 - 2026"
                    description="Curso superior focado em desenvolvimento de software, algoritmos, estruturas de dados, engenharia de software e gestão da tecnologia da."
                />
            </SectionCard>
        </div>
      </div>
    </div>
  );
}

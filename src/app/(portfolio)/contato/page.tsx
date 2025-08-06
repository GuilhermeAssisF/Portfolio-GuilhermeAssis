// src/app/(portfolio)/contato/page.tsx
"use client";
import React from "react";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandInstagram,
  IconMail,
  IconBrandWhatsapp,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";

// Nenhuma alteração necessária aqui
const contacts = [
  {
    icon: <IconBrandWhatsapp className="h-12 w-12" />,
    title: "WhatsApp",
    description: "Entre em contato diretamente comigo para uma resposta mais rápida.",
    href: "https://wa.me/5535999665912", // Lembre-se de substituir SEUNUMERO pelo seu número com o código do país
    cta: "Iniciar Conversa",
    className: "col-span-2",
    background: "bg-emerald-500",
  },
  {
    icon: <IconMail className="h-12 w-12" />,
    title: "Email",
    description: "A melhor forma de me contactar para propostas de projetos e colaborações.",
    href: "mailto:assisguilhermefernandes@gmail.com",
    cta: "Enviar Email",
    className: "col-span-3 lg:col-span-1",
    background: "bg-sky-500",
  },
  {
    icon: <IconBrandLinkedin className="h-12 w-12" />,
    title: "LinkedIn",
    description: "Conecte-se comigo para ver a minha trajetória profissional e recomendações.",
    href: "https://www.linkedin.com/in/guilherme-assis-1115a0274/",
    cta: "Visitar Perfil",
    className: "col-span-3 lg:col-span-1",
    background: "bg-blue-500",
  },
  {
    icon: <IconBrandGithub className="h-12 w-12" />,
    title: "GitHub",
    description: "Explore os meus repositórios de código e projetos de código aberto.",
    href: "https://github.com/GuilhermeAssisF",
    cta: "Ver Projetos",
    className: "col-span-3 lg:col-span-1",
    background: "bg-purple-500",
  },
  {
    icon: <IconBrandInstagram className="h-12 w-12" />,
    title: "Instagram",
    description: "Siga-me para ver os bastidores dos meus projetos e inspirações diárias.",
    href: "https://www.instagram.com/gilo_art/",
    cta: "Seguir",
    className: "col-span-1 lg:col-span-1",
    background: "bg-rose-500",
  },
];

export default function ContatoPage() {
  return (
    // Container principal modificado para não permitir rolagem interna
    <div className="flex flex-1 flex-col p-4 md:p-10 h-full overflow-hidden">
      <div className="flex justify-between items-center mb-6 flex-shrink-0">
        <h1 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200">
          Contato
        </h1>
      </div>
      {/* BentoGrid agora preenche o espaço e define 2 linhas para telas grandes */}
      <BentoGrid className="flex-1 grid-cols-3 grid-rows-2 gap-4">
        {contacts.map((contact, index) => (
          <BentoCard key={index} className={cn(contact.className, contact.background)}>
             <a 
              href={contact.href} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex flex-col justify-between h-full p-6 group cursor-emoji"
             >
              <div>
                {React.cloneElement(contact.icon, { className: "h-12 w-12 text-white" })}
                <h3 className="text-xl font-semibold text-white mt-4">
                  {contact.title}
                </h3>
                <p className="max-w-lg text-white/80 mt-2">
                  {contact.description}
                </p>
              </div>
              <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">
                {contact.cta} &rarr;
              </span>
            </a>
          </BentoCard>
        ))}
      </BentoGrid>
    </div>
  );
}
"use client";
import React from "react";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import {
  IconArrowRight,
  IconCode,
  IconApi,
  IconDatabase,
  IconBrandLinktree,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const services = [
  {
    icon: <IconCode className="h-12 w-12" />,
    title: "Desenvolvimento Front-End",
    description: "Criação de interfaces de utilizador modernas, responsivas e interativas com as tecnologias mais recentes.",
    className: "col-span-3 lg:col-span-1",
    background: "bg-green-500",
  },
  {
    icon: <IconApi className="h-12 w-12" />,
    title: "Desenvolvimento Back-End",
    description: "Construção de Sistemas e APIs robustas, seguras e escaláveis para suportar as suas aplicações.",
    className: "col-span-3 lg:col-span-1",
    background: "bg-amber-500",
  },
  {
    icon: <IconDatabase className="h-12 w-12" />,
    title: "Gestão de Bases de Dados",
    description: "Modelação, otimização e manutenção de bases de dados SQL para garantir a integridade e o desempenho dos seus dados.",
    className: "col-span-3 lg:col-span-1",
    background: "bg-blue-600",
  },
  {
    icon: <IconBrandLinktree className="h-12 w-12" />,
    title: "Criação de LinkBios",
    description: "Desenvolvimento de páginas de links personalizadas (Linktree) para centralizar a sua presença online.",
    className: "col-span-3",
    background: "bg-red-500",
  },
];

export default function ServicosPage() {
  return (
    <div className="flex flex-1 flex-col p-4 md:p-10 h-full overflow-y-auto">
      <div className="flex justify-between items-center mb-6 flex-shrink-0">
        <h1 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200">
          Serviços
        </h1>
      </div>
      <BentoGrid>
        {services.map((service, index) => (
          <BentoCard key={index} className={cn(service.className, service.background)}>
            <div className="flex flex-col justify-between h-full p-6 group">
              <div>
                {React.cloneElement(service.icon, { className: "h-12 w-12 text-white" })}
                <h3 className="text-xl font-semibold text-white mt-4">
                  {service.title}
                </h3>
                <p className="max-w-lg text-white/80 mt-2">
                  {service.description}
                </p>
              </div>
              <Link
                href="/contato"
                className="flex items-center gap-2 text-sm font-medium text-white/80 group-hover:text-white transition-colors"
              >
                Saber mais <IconArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </BentoCard>
        ))}
      </BentoGrid>
    </div>
  );
}

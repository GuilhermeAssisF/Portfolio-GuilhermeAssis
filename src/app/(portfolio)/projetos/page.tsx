"use client";
import React, { useState } from "react";
import { ProjectCard } from "@/components/ui/project-card";
import { cn } from "@/lib/utils";

export default function ProjetosPage() {
  const [activeTab, setActiveTab] = useState("BackEnd");

  const allProjects = [
    {
      category: "FrontEnd",
      src: "/img/computador_sistema.png",
      title: "Sistema de Gestão (Front-End)",
      description: "Interface moderna e responsiva para um sistema de gestão de transportes.",
      href: "#",
    },
    {
      category: "BackEnd",
      src: "/img_projetos/backend_1.png",
      title: "API para E-commerce (Back-End)",
      description: "API RESTful robusta para uma loja online, com autenticação e gestão de produtos.",
      href: "#",
    },
    {
      category: "FrontEnd",
      src: "/img/dev_png.png",
      title: "Landing Page para Devs",
      description: "Uma página de captura de leads moderna e responsiva, focada em programadores.",
      href: "#",
    },
    {
      category: "BackEnd",
      src: "/img_projetos/backend_3.png",
      title: "Microsserviço de Pagamentos",
      description: "Serviço dedicado para processamento de pagamentos com integração Stripe.",
      href: "#",
    },
  ];

  const filteredProjects = allProjects.filter(
    (project) => project.category === activeTab
  );

  const tabs = ["BackEnd", "FrontEnd"];

  return (
    <div className="flex flex-1 flex-col p-4 md:p-10 h-full overflow-y-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 flex-shrink-0 gap-4">
        <h1 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200">
          Meus Projetos
        </h1>
        <div className="flex w-full md:w-auto items-center gap-2 p-1 bg-neutral-100 dark:bg-neutral-800 rounded-lg">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                // Classes base para os botões, incluindo as responsivas
                "flex-1 md:flex-initial text-center px-4 py-1.5 text-sm font-medium rounded-md transition-colors duration-300",
                // Classes condicionais para o estado ativo/inativo
                activeTab === tab
                  ? "bg-white dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100 shadow-sm"
                  : "text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700/50"
              )}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={index}
            src={project.src}
            title={project.title}
            description={project.description}
            href={project.href}
          />
        ))}
      </div>
    </div>
  );
}

"use client";
import React, { useState } from "react";
import { ProjectCard } from "@/components/ui/project-card";
import { cn } from "@/lib/utils";

export default function ProjetosPage() {
  const [activeTab, setActiveTab] = useState("BackEnd");

  const allProjects = [
    {
      category: "FrontEnd",
      src: "/img_projetos/frontend_3.png",
      title: "ONG Unicão",
      description: "Este projeto é o site da Unicão, uma ONG de resgate e adoção de animais, desenvolvido com Next.js, React, TypeScript e Prismic. O site visa apresentar a organização, seus animais para adoção e facilitar o contato com a comunidade.",
      href: "https://github.com/GuilhermeAssisF/Unicao-Site",
    },
    {
      category: "BackEnd",
      src: "/img_projetos/backend_4.png",
      title: "Spring Boot CRUD API",
      description: "Este é um projeto de exemplo de uma API CRUD (Create, Read, Update, Delete) construída com Java e Spring Boot. É um ponto de partida ideal para entender os conceitos fundamentais de construção de APIs RESTful e a estrutura de um projeto Spring.",
      href: "https://github.com/GuilhermeAssisF/SpringBoot-Crud",
    },
    {
      category: "BackEnd",
      src: "/img_projetos/backend_1.png",
      title: "ERP Transportadora",
      description: "Este projeto é uma aplicação web para o gerenciamento de dados de uma empresa de transportes, incluindo clientes, funcionários, produtos e pedidos. A aplicação é desenvolvida em Java (Jakarta EE / Servlet API) para o backend, com JSP para as views, e utiliza um banco de dados MySQL para persistência dos dados. O framework Bootstrap é empregado para o estilo do frontend.",
      href: "https://github.com/GuilhermeAssisF/CRUD_Transportadora",
    },
    {
      category: "FrontEnd",
      src: "/img_projetos/frontend_1.png",
      title: "Acervo Online - E.E Cônego Paulo Monteiro",
      description: "Este projeto é um acervo online para a Escola Estadual Cônego Paulo Monteiro, que apresenta a história da escola, seus diretores e informações de contato. O site foi desenvolvido com HTML5, CSS3 e JavaScript.",
      href: "https://github.com/GuilhermeAssisF/AcervoOnline-EeConegoPauloMonteiro",
    },
    {
      category: "BackEnd",
      src: "/img_projetos/api_1.png",
      title: "Api Spotify - SpringOpenFeign",
      description: "ApiSpotify_SpringOpenFeign é uma API desenvolvida em Java utilizando o framework Spring e a biblioteca OpenFeign para integração com a API do Spotify. Este projeto permite buscar informações de músicas, álbuns, artistas e playlists diretamente da plataforma Spotify, facilitando a criação de serviços baseados em música.",
      href: "https://github.com/GuilhermeAssisF/ApiSpotify_SpringOpenFeign",
    },
    {
      category: "FrontEnd",
      src: "/img_projetos/frontend_2.png",
      title: "Meu Antigo Portólio",
      description: "Este projeto é meu antigo portfólio onde usei uma tecnologia mais pura durante meu aprendizado",
      href: "https://github.com/GuilhermeAssisF/Portfolio-GuilhermeAF",
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
                "flex-1 md:flex-initial text-center px-4 py-1.5 text-sm font-medium rounded-md transition-colors duration-300 cursor-emoji",
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

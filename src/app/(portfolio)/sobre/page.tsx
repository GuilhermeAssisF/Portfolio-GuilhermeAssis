import React from "react";

export default function ProjetosPage() {
  return (
    <div className="flex flex-1 flex-col p-4 md:p-10">
      <div className="flex justify-between items-center mb-6 flex-shrink-0">
        <h1 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200">
          Meus Projetos
        </h1>
      </div>
      <div className="flex-1 bg-white dark:bg-neutral-800 rounded-lg p-6">
        <p>Aqui ficará a galeria com todos os meus projetos...</p>
        {/* Você pode adicionar seus componentes de projeto aqui */}
      </div>
    </div>
  );
}

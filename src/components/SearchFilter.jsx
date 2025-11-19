import React from "react";

function SearchFilter() {
  return (
    <div className="w-full flex justify-end">
      {/* Painel de filtros */}
      <div className="border border-black w-[440px] mr-40 mt-20 p-6 bg-white">

        {/* TÍTULO */}
        <div className="mb-6">
          <p className="text-base font-semibold">Filtros de pesquisa</p>
          <hr className="mt-3" />
        </div>

        {/* 🔹 BLOCO 1 – ÁREA */}
        <div className="mb-6">
          <p className="text-base mb-3">Área</p>

          <label className="text-sm"><input type="checkbox" className="mr-2" />Desenvolvimento</label><br />
          <label className="text-sm"><input type="checkbox" className="mr-2" />Dados</label><br />
          <label className="text-sm"><input type="checkbox" className="mr-2" />Design</label><br />
          <label className="text-sm"><input type="checkbox" className="mr-2" />Infraestrutura</label><br />
          <label className="text-sm"><input type="checkbox" className="mr-2" />Produto</label><br />
          <label className="text-sm"><input type="checkbox" className="mr-2" />Qualidade</label><br />
          <label className="text-sm"><input type="checkbox" className="mr-2" />Marketing</label>
        </div>

        <hr className="my-6" />

        {/* 🔹 BLOCO 2 – IDIOMAS */}
        <div className="mb-6">
          <p className="text-base mb-3">Idiomas</p>

          <label className="text-sm"><input type="checkbox" className="mr-2" />Inglês</label><br />
          <label className="text-sm"><input type="checkbox" className="mr-2" />Espanhol</label><br />
          <label className="text-sm"><input type="checkbox" className="mr-2" />Francês</label><br />
          <label className="text-sm"><input type="checkbox" className="mr-2" />Alemão</label>
        </div>

        <hr className="my-6" />

        {/* 🔹 BLOCO 3 – ÁREAS DE INTERESSE */}
        <div className="mb-6">
          <p className="text-base mb-3">Áreas de Interesse</p>

          <div className="grid grid-cols-2 gap-y-2">

            <label className="text-sm"><input type="checkbox" className="mr-2" />IA</label>
            <label className="text-sm"><input type="checkbox" className="mr-2" />DevOps</label>

            <label className="text-sm"><input type="checkbox" className="mr-2" />Design Inclusivo</label>
            <label className="text-sm"><input type="checkbox" className="mr-2" />Psicologia Cognitiva</label>

            <label className="text-sm"><input type="checkbox" className="mr-2" />Machine Learning</label>
            <label className="text-sm"><input type="checkbox" className="mr-2" />Estatística</label>

            <label className="text-sm"><input type="checkbox" className="mr-2" />Automação</label>
            <label className="text-sm"><input type="checkbox" className="mr-2" />Cloud Native</label>

            <label className="text-sm"><input type="checkbox" className="mr-2" />Deep Learning</label>
            <label className="text-sm"><input type="checkbox" className="mr-2" />NLP</label>

            <label className="text-sm"><input type="checkbox" className="mr-2" />Educação</label>
            <label className="text-sm"><input type="checkbox" className="mr-2" />Psicologia Comportamental</label>

            <label className="text-sm"><input type="checkbox" className="mr-2" />Growth</label>
            <label className="text-sm"><input type="checkbox" className="mr-2" />Branding</label>

            <label className="text-sm"><input type="checkbox" className="mr-2" />Mobile First</label>
            <label className="text-sm"><input type="checkbox" className="mr-2" />Arquitetura Limpa</label>

            <label className="text-sm"><input type="checkbox" className="mr-2" />Arquitetura de Software</label>
            <label className="text-sm"><input type="checkbox" className="mr-2" />SRE</label>

          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchFilter;

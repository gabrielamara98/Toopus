import React from "react";

function SearchFilter() {
  return (
    <div className="w-full flex justify-end px-6">

      <aside className="w-[460px] mr-32 mt-16 mb-20">
        <div className="bg-white border border-gray-400 rounded-3xl shadow-md px-6 py-6">

          <header className="mb-6">
            <p className="text-lg font-semibold tracking-wide text-green-600 uppercase">
              Filtros de pesquisa
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Refine os resultados selecionando as opções abaixo.
            </p>
            <div className="border-t border-gray-200 mt-4" />
          </header>

          <section className="mb-6">
            <h2 className="text-base font-semibold text-gray-800 mb-3">
              Área
            </h2>

            <div className="space-y-1.5 text-sm text-gray-700">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-green-600" />
                <span>Desenvolvimento</span>
              </label>

              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-green-600" />
                <span>Dados</span>
              </label>

              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-green-600" />
                <span>Design</span>
              </label>

              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-green-600" />
                <span>Infraestrutura</span>
              </label>

              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-green-600" />
                <span>Produto</span>
              </label>

              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-green-600" />
                <span>Qualidade</span>
              </label>

              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-green-600" />
                <span>Marketing</span>
              </label>
            </div>
          </section>

          <div className="border-t border-gray-200 my-4" />

          <section className="mb-6">
            <h2 className="text-bse font-semibold text-gray-800 mb-3">
              Idiomas
            </h2>

            <div className="space-y-1.5 text-sm text-gray-700">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-green-600" />
                <span>Inglês</span>
              </label>

              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-green-600" />
                <span>Espanhol</span>
              </label>

              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-green-600" />
                <span>Francês</span>
              </label>

              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-green-600" />
                <span>Alemão</span>
              </label>
            </div>
          </section>

          <div className="border-t border-gray-200 my-4" />

          <section className="mb-2">
            <h2 className="text-bse font-semibold text-gray-800 mb-3">
              Áreas de Interesse
            </h2>

            <div className="grid grid-cols-2 gap-y-2 text-sm text-gray-700">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-green-600" />
                <span>IA</span>
              </label>

              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-green-600" />
                <span>DevOps</span>
              </label>

              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-green-600" />
                <span>Design Inclusivo</span>
              </label>

              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-green-600" />
                <span>Psicologia Cognitiva</span>
              </label>

              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-green-600" />
                <span>Machine Learning</span>
              </label>

              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-green-600" />
                <span>Estatística</span>
              </label>

              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-green-600" />
                <span>Automação</span>
              </label>

              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-green-600" />
                <span>Cloud Native</span>
              </label>

              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-green-600" />
                <span>Deep Learning</span>
              </label>

              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-green-600" />
                <span>NLP</span>
              </label>

              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-green-600" />
                <span>Educação</span>
              </label>

              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-green-600" />
                <span>Psicologia Comportamental</span>
              </label>

              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-green-600" />
                <span>Growth</span>
              </label>

              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-green-600" />
                <span>Branding</span>
              </label>

              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-green-600" />
                <span>Mobile First</span>
              </label>

              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-green-600" />
                <span>Arquitetura Limpa</span>
              </label>

              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-green-600" />
                <span>Arquitetura de Software</span>
              </label>

              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-green-600" />
                <span>SRE</span>
              </label>
            </div>
          </section>

          <footer className="mt-4">
            <div className="border-t border-gray-200 pt-3" />
          </footer>
        </div>
      </aside>
    </div>
  );
}

export default SearchFilter;
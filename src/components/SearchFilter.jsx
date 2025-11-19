import { useState } from "react";
import dados from "../data/usersDetail.json";

function SearchFilter({ onFilter }) {
  const [areasSelecionadas, setAreasSelecionadas] = useState([]);
  const [idiomasSelecionados, setIdiomasSelecionados] = useState([]);
  const [interessesSelecionados, setInteressesSelecionados] = useState([]);

  function aplicarFiltros(nAreas, nIdiomas, nInteresses) {
    let filtrados = dados;

    if (nAreas.length > 0) {
      filtrados = filtrados.filter((u) => nAreas.includes(u.area));
    }

    if (nIdiomas.length > 0) {
      filtrados = filtrados.filter((u) =>
        u.idiomas.some((i) => nIdiomas.includes(i.idioma))
      );
    }

    if (nInteresses.length > 0) {
      filtrados = filtrados.filter((u) =>
        u.areaInteresses.some((i) => nInteresses.includes(i))
      );
    }

    onFilter(filtrados);
  }

  function atualizar(e, lista, setLista) {
    const { checked, value } = e.target;

    const novaLista = checked
      ? [...lista, value]
      : lista.filter((item) => item !== value);

    setLista(novaLista);

    aplicarFiltros(
      lista === areasSelecionadas ? novaLista : areasSelecionadas,
      lista === idiomasSelecionados ? novaLista : idiomasSelecionados,
      lista === interessesSelecionados ? novaLista : interessesSelecionados
    );
  }

  return (
    <div className="w-full">
      <aside className="w-full mt-4">
        <div className="bg-white border border-gray-200 rounded-3xl shadow-md px-6 py-6">

          <header className="mb-6">
            <p className="text-lg font-semibold tracking-wide text-green-600 uppercase">Filtros de pesquisa</p>
            <p className="text-xs text-gray-500 mt-1">Refine os resultados selecionando as opções abaixo.</p>
            <div className="border-t border-gray-200 mt-4" />
          </header>

          <section className="mb-6">
            <h2 className="text-base font-semibold text-gray-800 mb-3">Área</h2>

            <div className="space-y-1.5 text-sm text-gray-700">
              {[
                "Desenvolvimento",
                "Dados",
                "Design",
                "Infraestrutura",
                "Produto",
                "Qualidade",
                "Marketing"
              ].map((area) => (
                <label key={area} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    value={area}
                    className="accent-green-600"
                    onChange={(e) => atualizar(e, areasSelecionadas, setAreasSelecionadas)}
                  />
                  <span>{area}</span>
                </label>
              ))}
            </div>
          </section>

          <div className="border-t border-gray-200 my-4" />

          <section className="mb-6">
            <h2 className="text-bse font-semibold text-gray-800 mb-3">Idiomas</h2>

            <div className="space-y-1.5 text-sm text-gray-700">
              {["Inglês", "Espanhol", "Francês", "Alemão"].map((idioma) => (
                <label key={idioma} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    value={idioma}
                    className="accent-green-600"
                    onChange={(e) => atualizar(e, idiomasSelecionados, setIdiomasSelecionados)}
                  />
                  <span>{idioma}</span>
                </label>
              ))}
            </div>
          </section>

          <div className="border-t border-gray-200 my-4" />

          <section className="mb-2">
            <h2 className="text-bse font-semibold text-gray-800 mb-3">Áreas de Interesse</h2>

            <div className="grid grid-cols-2 gap-y-2 text-sm text-gray-700">
              {[
                "IA", "DevOps", "Design Inclusivo", "Psicologia Cognitiva",
                "Machine Learning", "Estatística", "Automação", "Cloud Native",
                "Deep Learning", "NLP", "Educação", "Psicologia Comportamental",
                "Growth", "Branding", "Mobile First", "Arquitetura Limpa",
                "Arquitetura de Software", "SRE"
              ].map((int) => (
                <label key={int} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    value={int}
                    className="accent-green-600"
                    onChange={(e) => atualizar(e, interessesSelecionados, setInteressesSelecionados)}
                  />
                  <span>{int}</span>
                </label>
              ))}
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
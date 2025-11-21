import { useState, useEffect } from "react";
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { useNavigate } from "react-router-dom";

function Modal({open, setOpen, id, nome, foto, cargo, resumo, localizacao, area, habilidadesTecnicas, softSkills, experiencias, formacao, projetos, certificacoes, idiomas, areaInteresses, onConnectionChange,}) {

  const navigate = useNavigate();
  const [recomendacoes, setRecomendacoes] = useState([]);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    if (!id) return;
    
    const storageKey = `recomendacoes_${id}`;
    const armazenadas = localStorage.getItem(storageKey);

    if (armazenadas) {
      try {
        setRecomendacoes(JSON.parse(armazenadas));
      } catch (error) {
        console.error("Erro ao ler recomendações do localStorage:", error);
      }
    }

    try {
      const connectionsKey = "connections";
      const armazenadasConn = localStorage.getItem(connectionsKey);
      if (armazenadasConn) {
        const lista = JSON.parse(armazenadasConn);
        if (Array.isArray(lista)) {
          const normalizados = lista.map(Number);
          setIsConnected(normalizados.includes(Number(id)));
        }
      }
    } catch (e) {
      console.error("Erro ao ler conexões:", e);
    }
  }, [id]);

  function handleConectar() {
    const key = "connections";
    const numericId = Number(id);
    let lista = [];

    try {
      const armazenadas = localStorage.getItem(key);
      if (armazenadas) {
        const parsed = JSON.parse(armazenadas);
        if (Array.isArray(parsed)) lista = parsed.map(Number);
      }
    } catch (error) {
      console.error("Erro ao ler conexões:", error);
    }

    let newStatus;

    if (isConnected) {
      const novaLista = lista.filter(item => item !== numericId);
      localStorage.setItem(key, JSON.stringify(novaLista));
      newStatus = false;
    } else {
      if (!lista.includes(numericId)) {
        lista.push(numericId);
        localStorage.setItem(key, JSON.stringify(lista));
      }
      newStatus = true;
    }

    setIsConnected(newStatus);

    if (onConnectionChange) {
      onConnectionChange(numericId, newStatus);
    }
  }

  function handleRecomendar() {
    setOpen(false);
    navigate(`/recomendar/${id}`);
  }

  return (
    <div>
      <Dialog open={open} onClose={setOpen} className="relative z-10">
        <DialogBackdrop transition className="fixed inset-0 bg-gray-900/50 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"/>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">

            <DialogPanel transition className="relative transform overflow-hidden rounded-3xl bg-white text-left shadow-2xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-3xl data-closed:sm:translate-y-0 data-closed:sm:scale-95">

              <div className="px-6 py-6 sm:px-8 sm:py-8">
                <div className="flex flex-col sm:flex-row gap-8">

                  <div className="flex flex-col items-center sm:items-start gap-4 sm:w-1/3">
                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-green-500 shadow-md">
                      <img className="w-full h-full object-cover" src={foto} alt={nome} />
                    </div>

                    <div className="text-center sm:text-left">
                      <DialogTitle as="h3" className="text-xl font-semibold text-gray-900">{nome}</DialogTitle>
                      <p className="text-sm text-gray-600 mt-1">{cargo}</p>
                      <p className="text-xs text-gray-500 mt-1">{localizacao}</p>
                      <p className="text-xs text-gray-500">{area}</p>
                    </div>

                    {habilidadesTecnicas && habilidadesTecnicas.length > 0 && (
                      <div className="flex flex-wrap justify-center sm:justify-start gap-2 mt-2">
                        {habilidadesTecnicas.map((habilidade) => (
                          <span
                            key={habilidade}
                            className="px-3 py-1 rounded-full bg-green-100 text-green-700 border border-green-300 text-xs">
                            {habilidade}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="sm:w-2/3 max-h-[60vh] overflow-y-auto pr-1 space-y-4">

                    {resumo && (
                      <section>
                        <h4 className="text-xl font-semibold text-gray-800 mb-1">Sobre</h4>
                        <p className="text-sm text-gray-700 leading-relaxed">{resumo}</p>
                      </section>
                    )}

                    {softSkills && softSkills.length > 0 && (
                      <section>
                        <h4 className="text-xl font-semibold text-gray-800 mb-1">Soft skills</h4>
                        <ul className="flex flex-wrap gap-2">
                          {softSkills.map((soft) => (
                            <li
                              key={soft}
                              className="px-3 py-1 rounded-full bg-green-50 text-green-800 border border-green-200 text-xs">
                              {soft}
                            </li>
                          ))}
                        </ul>
                      </section>
                    )}

                    {experiencias && experiencias.length > 0 && (
                      <section>
                        <h4 className="text-xl font-semibold text-gray-800 mb-1">Experiências</h4>
                        <div className="space-y-3">
                          {experiencias.map((xp, index) => (
                            <div key={index} className="rounded-xl bg-gray-50 px-3 py-2 text-sm text-gray-800">
                              <p className="font-semibold text-lg">{xp.empresa}</p>
                              <p className="text-xs text-gray-600">{xp.cargo} • {xp.inicio} - {xp.fim}</p>
                              <p className="mt-1">{xp.descricao}</p>
                            </div>
                          ))}
                        </div>
                      </section>
                    )}

                    {formacao && formacao.length > 0 && (
                      <section>
                        <h4 className="text-xl font-semibold text-gray-800 mb-1">Formação</h4>
                        <div className="space-y-2 text-sm text-gray-800">
                          {formacao.map((f, index) => (
                            <div key={index}>
                              <p className="font-semibold text-base">{f.curso}</p>
                              <p className="text-xs text-gray-600">{f.instituicao} • {f.ano}</p>
                            </div>
                          ))}
                        </div>
                      </section>
                    )}

                    {projetos && projetos.length > 0 && (
                      <section>
                        <h4 className="text-xl font-semibold text-gray-800 mb-1">Projetos</h4>
                        <div className="space-y-2 text-sm text-gray-800">
                          {projetos.map((pro, index) => (
                            <div key={index} className="rounded-xl bg-gray-50 px-3 py-2">
                              <p className="font-semibold">{pro.titulo}</p>
                              {pro.link && (
                                <p className="text-xs text-green-700 break-all">{pro.link}</p>
                              )}
                              <p className="text-xs mt-1">{pro.descricao}</p>
                            </div>
                          ))}
                        </div>
                      </section>
                    )}

                    {certificacoes && certificacoes.length > 0 && (
                      <section>
                        <h4 className="text-xl font-semibold text-gray-800 mb-1">Certificações</h4>
                        <ul className="list-disc list-inside text-sm text-gray-800">
                          {certificacoes.map((c, index) => (
                            <li key={index}>{c}</li>
                          ))}
                        </ul>
                      </section>
                    )}

                    {idiomas && idiomas.length > 0 && (
                      <section>
                        <h4 className="text-xl font-semibold text-gray-800 mb-1">Idiomas</h4>
                        <div className="space-y-1 text-sm text-gray-800">
                          {idiomas.map((idio, index) => (
                            <p key={index}>
                              <span className="font-semibold">{idio.idioma}:</span> {idio.nivel}
                            </p>
                          ))}
                        </div>
                      </section>
                    )}

                    {areaInteresses && areaInteresses.length > 0 && (
                      <section>
                        <h4 className="text-xl font-semibold text-gray-800 mb-1">Áreas de interesse</h4>
                        <ul className="flex flex-wrap gap-2">
                          {areaInteresses.map((areaItem) => (
                            <li
                              key={areaItem}
                              className="px-3 py-1 rounded-full bg-green-50 text-green-800 border border-green-200 text-xs">
                              {areaItem}
                            </li>
                          ))}
                        </ul>
                      </section>
                    )}

                    {recomendacoes.length > 0 && (
                      <section className="mt-4">
                        <h4 className="text-xl font-semibold text-gray-800 mb-1">Recomendações</h4>
                        <div className="space-y-3">
                          {recomendacoes.map((rec, index) => (
                            <div key={index} className="rounded-xl bg-gray-50 px-3 py-2 text-sm text-gray-800">
                              <p className="font-semibold text-lg">{rec.titulo}</p>
                              <p className="mt-1 text-sm">{rec.mensagem}</p>
                              <p className="mt-1 text-[11px] text-gray-400">Recomendação anônima</p>
                            </div>
                          ))}
                        </div>
                      </section>
                    )}
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">

                  <button
                    onClick={handleConectar}
                    className={`flex-1 rounded-full border px-4 py-2 text-sm font-medium transition-all cursor-pointer ${
                      isConnected
                        ? "border-green-600 bg-green-600 text-white hover:bg-green-500"
                        : "border-green-600 text-green-700 hover:bg-green-600 hover:text-white"
                    }`}
                  >
                    {isConnected ? "Conectado" : "Conectar"}
                  </button>

                  <button
                    onClick={handleRecomendar}
                    className="flex-1 rounded-full border border-green-600 text-green-700 px-4 py-2 text-sm font-medium hover:bg-green-600 hover:text-white transition-all cursor-pointer">Recomendar</button>
                </div>

                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="inline-flex justify-center rounded-full bg-red-500 px-4 py-2 text-sm font-semibold text-white hover:bg-red-400 cursor-pointer">Sair</button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
}

export default Modal;
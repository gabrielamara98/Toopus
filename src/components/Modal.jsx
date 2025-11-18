import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'


function Modal({open, setOpen, nome, foto, cargo, resumo, localizacao, area, habilidadesTecnicas, softSkills, experiencias, formacao, projetos, certificacoes, idiomas, areaInteresses}) {

  return (
    <div>
        <Dialog open={open} onClose={setOpen} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-900/50 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"/>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
            <DialogPanel
                transition
                className="relative transform overflow-hidden rounded-3xl bg-white text-left shadow-2xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-3xl data-closed:sm:translate-y-0 data-closed:sm:scale-95">
                
                {/* CONTEÚDO */}
                <div className="px-6 py-6 sm:px-8 sm:py-8">
                <div className="flex flex-col sm:flex-row gap-8">

                    {/* LADO ESQUERDO – FOTO + INFO BÁSICA */}
                    <div className="flex flex-col items-center sm:items-start gap-4 sm:w-1/3">
                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-green-500 shadow-md">
                        <img className="w-full h-full object-cover" src={foto} alt={nome}/>
                    </div>

                    <div className="text-center sm:text-left">
                        <DialogTitle as="h3" className="text-xl font-semibold text-gray-900">{nome}</DialogTitle>
                        <p className="text-sm text-gray-600 mt-1">{cargo}</p>
                        <p className="text-xs text-gray-500 mt-1">{localizacao}</p>
                        <p className="text-xs text-gray-500">{area}</p>
                    </div>

                    {/* HABILIDADES TÉCNICAS (TAGZINHAS) */}
                    {habilidadesTecnicas && habilidadesTecnicas.length > 0 && (
                        <div className="flex flex-wrap justify-center sm:justify-start gap-2 mt-2">
                        {habilidadesTecnicas.map((habilidade) => (
                            <span key={habilidade} className="px-3 py-1 rounded-full bg-green-100 text-green-700 border border-green-300 text-xs">
                                {habilidade}
                            </span>
                        ))}
                        </div>
                    )}
                    </div>

                    {/* LADO DIREITO – DETALHES */}
                    <div className="sm:w-2/3 max-h-[60vh] overflow-y-auto pr-1 space-y-4">

                    {/* RESUMO */}
                    {resumo && (
                        <section>
                        <h4 className="text-sm font-semibold text-gray-800 mb-1">Sobre</h4>
                        <p className="text-sm text-gray-700 leading-relaxed">{resumo}</p>
                        </section>
                    )}

                    {/* SOFT SKILLS */}
                    {softSkills && softSkills.length > 0 && (
                        <section>
                        <h4 className="text-sm font-semibold text-gray-800 mb-1">Soft skills</h4>
                        <ul className="flex flex-wrap gap-2">
                            {softSkills.map((soft) => (
                            <li key={soft} className="px-3 py-1 rounded-full bg-green-50 text-green-800 border border-green-200 text-xs">
                                {soft}
                            </li>
                            ))}
                        </ul>
                        </section>
                    )}

                    {/* EXPERIÊNCIAS */}
                    {experiencias && experiencias.length > 0 && (
                        <section>
                        <h4 className="text-sm font-semibold text-gray-800 mb-1">Experiências</h4>
                        <div className="space-y-3">
                            {experiencias.map((xp, index) => (
                            <div key={index} className="rounded-xl bg-gray-50 px-3 py-2 text-sm text-gray-800">
                                <p className="font-semibold">{xp.empresa}</p>
                                <p className="text-xs text-gray-600">{xp.cargo} • {xp.inicio} - {xp.fim}</p>
                                <p className="text-xs mt-1">{xp.descricao}</p>
                            </div>
                            ))}
                        </div>
                        </section>
                    )}

                    {/* FORMAÇÃO */}
                    {formacao && formacao.length > 0 && (
                        <section>
                        <h4 className="text-sm font-semibold text-gray-800 mb-1">Formação</h4>
                        <div className="space-y-2 text-sm text-gray-800">
                            {formacao.map((f, index) => (
                            <div key={index}>
                                <p className="font-semibold">{f.curso}</p>
                                <p className="text-xs text-gray-600">{f.instituicao} • {f.ano}</p>
                            </div>
                            ))}
                        </div>
                        </section>
                    )}

                    {/* PROJETOS */}
                    {projetos && projetos.length > 0 && (
                        <section>
                        <h4 className="text-sm font-semibold text-gray-800 mb-1">Projetos</h4>
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

                    {/* CERTIFICAÇÕES */}
                    {certificacoes && certificacoes.length > 0 && (
                        <section>
                        <h4 className="text-sm font-semibold text-gray-800 mb-1">Certificações</h4>
                        <ul className="list-disc list-inside text-sm text-gray-800">
                            {certificacoes.map((c, index) => (
                            <li key={index}>{c}</li>
                            ))}
                        </ul>
                        </section>
                    )}

                    {/* IDIOMAS */}
                    {idiomas && idiomas.length > 0 && (
                        <section>
                        <h4 className="text-sm font-semibold text-gray-800 mb-1">Idiomas</h4>
                        <div className="space-y-1 text-sm text-gray-800">
                            {idiomas.map((idio, index) => (
                            <p key={index}>
                                <span className="font-semibold">{idio.idioma}:</span>{" "}
                                {idio.nivel}
                            </p>
                            ))}
                        </div>
                        </section>
                    )}

                    {/* ÁREAS DE INTERESSE */}
                    {areaInteresses && areaInteresses.length > 0 && (
                        <section>
                        <h4 className="text-sm font-semibold text-gray-800 mb-1">Áreas de interesse</h4>
                        <ul className="flex flex-wrap gap-2">
                            {areaInteresses.map((areaItem) => (
                            <li key={areaItem} className="px-3 py-1 rounded-full bg-green-50 text-green-800 border border-green-200 text-xs">
                                {areaItem}
                            </li>
                            ))}
                        </ul>
                        </section>
                    )}
                    </div>
                </div>
                </div>

                {/* RODAPÉ – BOTÕES */}
                <div className="bg-gray-50 px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
                    <button className="flex-1 rounded-full border border-green-600 text-green-700 px-4 py-2 text-sm font-medium hover:bg-green-600 hover:text-white transition-all">Enviar mensagem</button>
                    <button className="flex-1 rounded-full border border-green-600 text-green-700 px-4 py-2 text-sm font-medium hover:bg-green-600 hover:text-white transition-all">Recomendar</button>
                </div>

                <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="inline-flex justify-center rounded-full bg-red-500 px-4 py-2 text-sm font-semibold text-white hover:bg-red-400">Sair</button>
                </div>
            </DialogPanel>
            </div>
        </div>
        </Dialog>
    </div>
  )
}

export default Modal
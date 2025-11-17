import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'


function Modal({open, setOpen, nome, foto, cargo, resumo, localizacao, area, habilidadesTecnicas, softSkills, experiencias, formacao, projetos, certificacoes, idiomas, areaInteresses}) {
 
  return (
    <div>
      <Dialog open={open} onClose={setOpen} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-900/50 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-gray-800 text-left shadow-xl outline -outline-offset-1 outline-white/10 transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
            >
              <div className="bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <DialogTitle as="h3" className="text-base font-semibold text-white">Perfil</DialogTitle>
                    <div className='text-base font-semibold text-white'>
                        <p>{nome}</p>
                        <p>{foto}</p>
                        <p>{cargo}</p>
                        <p>{resumo}</p>
                        <p>{localizacao}</p>
                        <p>{area}</p>
                        <div>
                            <ul>
                                {habilidadesTecnicas.map((habilidades) =>{
                                    return(
                                        <li>{habilidades}</li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div>
                            <ul>
                                {softSkills.map((soft) =>{
                                    return(
                                        <li>{soft}</li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div>
                            {experiencias.map((xp)=>{
                                return(
                                    <>
                                        <p>Empresa: {xp.empresa}</p>
                                        <p>Cargo: {xp.cargo}</p>
                                        <p>Inicio: {xp.inicio}</p>
                                        <p>Fim: {xp.fim}</p>
                                        <p>Descrição: {xp.descricao}</p>
                                    </>
                                )
                            })}
                        </div>
                        <div>
                            {formacao.map((f) =>{
                                return(
                                    <>
                                        <p>Curso: {f.curso}</p>
                                        <p>Instituição: {f.instituicao}</p>
                                        <p>Ano: {f.ano}</p>
                                    </>
                                )
                            })}
                        </div>
                        <div>
                            {projetos.map((pro) =>{
                                return(
                                    <>
                                        <p>Titulo: {pro.titulo}</p>
                                        <p>Link: {pro.link}</p>
                                        <p>Descrição: {pro.descricao}</p>
                                    </>
                                )
                            })}
                        </div>
                        <div>
                            <ul>
                                {certificacoes.map((c) =>{
                                    return(
                                        <li>{c}</li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div>
                            {idiomas.map((idio) =>{
                                return(
                                    <>
                                        <p>Idioma: {idio.idioma}</p>
                                        <p>Nivel: {idio.nivel}</p>
                                    </>
                                )
                            })}
                        </div>
                        <div>
                            <ul>
                                {areaInteresses.map((area) =>{
                                    return(
                                        <li>{area}</li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-700/25 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="inline-flex w-full justify-center rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-white hover:bg-red-400 sm:ml-3 sm:w-auto"
                >
                    Sair
                </button>
                <button>Recomendar</button>
                <button>Enviar Mensagem</button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  )
}

export default Modal;

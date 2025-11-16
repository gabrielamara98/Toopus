import dadosPerfil from "../data/usersDetail.json"

function Card(){
    return(
        <>
            {dadosPerfil.map((items) =>{
                return(
                    <div key={items.id} className="grid auto-rows-auto w-sm bg-white border border-gray-200 rounded-3xl justify-items-center gap-4 px-6 py-6 shadow-md hover:shadow-lg transition-all duration-300"> 
                        <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-green-500 shadow-md">
                            <img className="w-full h-full object-cover"src={items.foto}></img>
                        </div>
                        <div className="flex flex-col text-center gap-3 mt-2">
                            <p className="text-lg font-semibold">{items.nome}</p>
                            <p>{items.cargo}</p>
                        </div>
                        <div className="flex flex-wrap justify-center gap-2 mt-2 text-xs">
                            {items.habilidadesTecnicas.map((skills) =>{
                                return(
                                    <p key={skills}
                                        className="px-3 py-1 rounded-full bg-green-100 text-green-700 border border-green-300">{skills}</p>
                                )
                            })}
                        </div>
                        <button className="border border-green-600 text-green-700 rounded-full min-w-xs py-2 px-4 mt-4 hover:bg-green-600 hover:text-white transition-all">Ver mais</button>
                    </div>
                )
            })}
        </>
    )
}
export default Card;
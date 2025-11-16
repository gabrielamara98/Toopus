import dadosPerfil from "../data/usersDetail.json"

function Card(){
    return(
        <>
            {dadosPerfil.map((items) =>{
                return(
                    <div key={items.id} className="grid auto-rows-auto w-sm border justify-items-center gap-6 px-5 py-5 rounded-md">
                        <div className="w-40 h-40 rounded-full overflow-hidden border-3">
                            <img className="w-full h-full object-cover"src={items.foto}></img>
                        </div>
                        <div className="flex flex-col text-center gap-3">
                            <p>{items.nome}</p>
                            <p>{items.cargo}</p>
                        </div>
                        <div className="flex flex-row gap-4 text-lg">
                            {items.habilidadesTecnicas.map((skills) =>{
                                return(
                                    <p>{skills}</p>
                                )
                            })}
                        </div>
                        <button className="border rounded-full min-w-xs py-2 px-2 ">Ver mais</button>
                    </div>
                )
            })}
        </>
    )
}
export default Card;
import { useState } from "react";
import dados from "../data/usersDetail.json"
import Card from "./Card";

function SearchBar(){

    const [item,SetItem] = useState('')
    const [usuario, setUsuario] = useState(dados)

    const handleInput= (letra) => {
        const inputDigitado = letra.target.value
        SetItem(inputDigitado)

        const usuarioFiltro = dados.filter((u) =>
            u.nome.toLocaleLowerCase().includes(inputDigitado.toLocaleLowerCase())
        );

        console.log(usuarioFiltro)
        setUsuario(usuarioFiltro)
    }

    return(
        <>
            <input type = "text" value={item} onChange={handleInput} placeholder="Digite aqui para procurar"></input>
            {usuario.map((x) =>{
                return(
                    <Card key={x.id} item={x} />
                )
            })}
        </>
    )
}

export default SearchBar;
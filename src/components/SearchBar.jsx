import { useState } from "react";
import dados from "../data/usersDetail.json";

function SearchBar({ onFilter }) {
  const [item, SetItem] = useState("");

  const handleInput = (letra) => {
    const inputDigitado = letra.target.value;
    SetItem(inputDigitado);

    const usuarioFiltro = dados.filter((u) =>
      u.nome.toLowerCase().includes(inputDigitado.toLowerCase())
    );

    if (onFilter) {
      onFilter(usuarioFiltro);
    }
  };

  return (
    <input type="text" value={item} onChange={handleInput} placeholder="Digite aqui para procurar" className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-2xl shadow-sm bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-green-600 dark:focus:border-green-400 focus:ring-2 focus:ring-green-200 dark:focus:ring-green-900/60"/>
  );
}

export default SearchBar;
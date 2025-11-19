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
    <>
      <input
        type="text"
        value={item}
        onChange={handleInput}
        placeholder="Digite aqui para procurar"
        className="w-full px-4 py-2.5 border border-gray-300 rounded-2xl shadow-sm bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:border-green-600 focus:ring-2 focus:ring-green-200"
      />
    </>
  );
}

export default SearchBar;
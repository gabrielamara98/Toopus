import { useState } from "react";
import dados from "../data/usersDetail.json";
import SearchBar from "../components/SearchBar";
import SearchFilter from "../components/SearchFilter";
import Card from "../components/Card";

function Search() {
  const [usuariosFiltrados, setUsuariosFiltrados] = useState(dados);

  return (
    <main className="px-10 py-4">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-green-600">Encontre talentos na Toopus</h1>
        <p className="text-sm text-gray-500 mt-1">Filtre por áreas, idiomas ou interesses.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
        <div className="lg:col-span-1 flex flex-col gap-6 max-w-[460px]">
          <SearchBar onFilter={setUsuariosFiltrados} />
          <SearchFilter baseData={dados} onFilter={setUsuariosFiltrados} />
        </div>

        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
            {usuariosFiltrados.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Search;
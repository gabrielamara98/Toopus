import { useEffect, useState } from "react";
import dados from "../data/usersDetail.json";
import Card from "../components/Card";
import { Link } from "react-router-dom";

function Connection() {
  const [connectedUsers, setConnectedUsers] = useState([]);

  useEffect(() => {
    try {
      const connectionsKey = "connections";
      const armazenadas = localStorage.getItem(connectionsKey);

      if (!armazenadas) {
        setConnectedUsers([]);
        return;
      }

      const ids = JSON.parse(armazenadas);

      if (!Array.isArray(ids)) {
        setConnectedUsers([]);
        return;
      }

      const idsNormalizados = ids.map(Number);

      const filtrados = dados.filter((user) =>
        idsNormalizados.includes(Number(user.id))
      );

      setConnectedUsers(filtrados);
    } catch (error) {
      console.error("Erro ao carregar conexões:", error);
      setConnectedUsers([]);
    }
  }, []);

  function handleConnectionChange(id, isConnectedNow) {
    if (!isConnectedNow) {
      setConnectedUsers((prev) =>
        prev.filter((user) => Number(user.id) !== Number(id))
      );
    }
  }

  return (
    <main className="px-10 py-10 min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-green-600 dark:text-green-400">Pessoas que você se conectou</h1>
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Veja as pessoas com quem você já está conectada na Toopus.</p>
      </div>

      {connectedUsers.length === 0 ? (
        <div className="mt-10">
          <p className="text-md text-gray-600 dark:text-gray-400 leading-relaxed">Você ainda não se conectou com ninguém. Vá até a página{" "}<Link to="/search" className="font-semibold text-green-600 dark:text-green-400 underline hover:text-green-500 dark:hover:text-green-300 transition-colors">Search</Link>{" "}e clique em <span className="font-semibold">“Conectar”</span> nos perfis que você gostar.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-full">
          {connectedUsers.map((item) => (
            <Card key={item.id} item={item} onConnectionChange={handleConnectionChange}/>
          ))}
        </div>
      )}
    </main>
  );
}

export default Connection;

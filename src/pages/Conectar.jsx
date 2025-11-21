import { useEffect, useState } from "react";
import dados from "../data/usersDetail.json";
import Card from "../components/Card";

function Conectar() {
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
    <main className="px-10 py-4">

      <div className="mb-8">
        <h1 className="text-2xl font-bold text-green-600">Pessoas que você se conectou</h1>
        <p className="text-sm text-gray-500 mt-1">Veja as pessoas com quem você já está conectada na Toopus.</p>
      </div>

      {connectedUsers.length === 0 ? (
        <p className="text-sm text-gray-500">Você ainda não se conectou com ninguém. Vá até a página{" "}<span className="font-semibold">Search</span> e clique em &quot;Conectar&quot; nos perfis que você gostar.</p>) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
          {connectedUsers.map((item) => (
            <Card key={item.id} item={item} onConnectionChange={handleConnectionChange}/>
          ))}
        </div>
      )}
    </main>
  );
}

export default Conectar;

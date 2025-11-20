import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import dados from "../data/usersDetail.json";

function Recomendar() {
  const { id } = useParams();
  const navigate = useNavigate();

  const usuario = dados.find((item) => String(item.id) === String(id));

  const [titulo, setTitulo] = useState("");
  const [mensagem, setMensagem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const storageKey = `recomendacoes_${id}`;

    const armazenadas = localStorage.getItem(storageKey);
    let lista = [];

    if (armazenadas) {
      try {
        lista = JSON.parse(armazenadas);
      } catch (erro) {
        console.error("Erro ao ler recomendações do localStorage:", erro);
      }
    }
    const novaRecomendacao = {titulo, mensagem, data: new Date().toISOString(),};
    const atualizadas = [...lista, novaRecomendacao];

    localStorage.setItem(storageKey, JSON.stringify(atualizadas));

    alert("Recomendação enviada com sucesso!");
    navigate(-1); 
  }

  return (
    <main className="flex justify-center px-4 py-10 bg-white">
      <div className="w-full max-w-3xl bg-white rounded-3xl shadow-md px-8 py-8">

        <div className="mb-6 flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold text-green-600">Recomendar {usuario ? usuario.nome : "talento"}</h1>
            <p className="text-sm text-gray-500 mt-1">Adicione um título e uma mensagem recomendando essa pessoa.</p>
          </div>

          <div className="w-25 h-25 rounded-full overflow-hidden border-4 border-green-500 shadow-md">
            <img src={usuario?.foto} alt={usuario?.nome} className="w-full h-full object-cover"/>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">Título da recomendação</label>
            <input
              type="text"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              placeholder="Ex.: Profissional dedicado e colaborativo"
              className="border border-gray-300 rounded-xl px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
              required
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">Mensagem</label>
            <textarea
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
              placeholder="Descreva por que você recomenda essa pessoa."
              className="border border-gray-300 rounded-xl px-3 py-2 text-sm outline-none resize-y min-h-[200px] focus:ring-2 focus:ring-green-500 focus:border-green-500"
              required
            />
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <button type="button"onClick={() => navigate(-1)} className="px-6 py-2 rounded-full border border-gray-300 text-gray-600 text-sm font-medium hover:bg-gray-100 transition">Cancelar</button>

            <button type="submit" className="px-8 py-2 rounded-full bg-green-500 text-white text-sm font-semibold hover:bg-green-600 transition">Enviar recomendação</button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default Recomendar;
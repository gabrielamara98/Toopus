// src/pages/Home.jsx
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="px-8 py-10 text-gray-900 dark:text-gray-100">
      {/* HERO */}
      <section className="text-center mt-10 mb-20 max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold text-green-600 dark:text-green-400 leading-tight">
          Conecte talentos. Construa oportunidades.
        </h1>

        <p className="text-gray-600 dark:text-gray-200 mt-4 text-lg leading-relaxed">
          A <span className="font-semibold text-green-600 dark:text-green-400">Toopus</span> é
          uma plataforma pensada para facilitar conexões reais entre pessoas, áreas de
          interesse e futuros projetos. Aqui você pode explorar perfis, descobrir novas
          habilidades e se aproximar de profissionais que fazem sentido para a sua jornada.
        </p>

        <p className="text-gray-600 dark:text-gray-200 mt-4 text-lg leading-relaxed">
          Nosso propósito é criar um ambiente onde cada pessoa possa mostrar seu potencial,
          ser vista e encontrar oportunidades que tenham significado — seja para colaboração,
          estudos, network ou novas ideias.
        </p>

        <Link
          to="/search"
          className="inline-block mt-8 bg-green-600 text-white font-semibold px-8 py-4 rounded-2xl shadow-md hover:bg-green-700 hover:shadow-lg transition-all text-lg"
        >
          Explorar perfis
        </Link>
      </section>

      {/* BANNER VERDINHO */}
      <section className="max-w-4xl mx-auto mb-16">
        <div className="bg-green-50 border border-green-100 rounded-3xl px-6 py-6 md:px-10 md:py-7 text-center md:text-left flex flex-col md:flex-row items-center gap-4 md:gap-8 dark:bg-green-900/40 dark:border-green-700">
          <div className="flex-1">
            <h2 className="text-xl md:text-2xl font-semibold text-green-700 dark:text-green-300">
              Uma vitrine de talentos em um só lugar.
            </h2>
            <p className="text-gray-600 dark:text-gray-200 mt-2">
              Perfis organizados, detalhes claros e filtros que ajudam você a encontrar exatamente
              o tipo de pessoa que está procurando: por área, idioma, interesses e muito mais.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mt-2 md:mt-0">
            <span className="px-4 py-1 rounded-full text-sm bg-white border border-green-200 text-green-700 dark:bg-transparent dark:text-green-300 dark:border-green-500">
              Estudantes
            </span>
            <span className="px-4 py-1 rounded-full text-sm bg-white border border-green-200 text-green-700 dark:bg-transparent dark:text-green-300 dark:border-green-500">
              Profissionais em formação
            </span>
            <span className="px-4 py-1 rounded-full text-sm bg-white border border-green-200 text-green-700 dark:bg-transparent dark:text-green-300 dark:border-green-500">
              Times e projetos
            </span>
          </div>
        </div>
      </section>

      {/* TRÊS CARDS PRINCIPAIS */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-24 max-w-5xl mx-auto">
        <div className="p-6 bg-white shadow-md rounded-3xl text-center border border-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100">
          <h3 className="text-xl font-bold text-green-600 dark:text-green-400">Descubra talentos</h3>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Busque pessoas por área de atuação, idiomas, interesses e objetivos em comum.
          </p>
        </div>

        <div className="p-6 bg-white shadow-md rounded-3xl text-center border border-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100">
          <h3 className="text-xl font-bold text-green-600 dark:text-green-400">Conexões com propósito</h3>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Encontre perfis que realmente combinam com aquilo que você está construindo.
          </p>
        </div>

        <div className="p-6 bg-white shadow-md rounded-3xl text-center border border-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100">
          <h3 className="text-xl font-bold text-green-600 dark:text-green-400">Crescimento em rede</h3>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Amplie seu networking, fortaleça parcerias e compartilhe experiências.
          </p>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="max-w-5xl mx-auto mb-24">
        <h2 className="text-2xl font-semibold text-green-600 dark:text-green-400 text-center mb-6">
          Como a Toopus funciona?
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-center max-w-2xl mx-auto mb-10">
          A ideia é simples: tornar mais fácil enxergar quem são as pessoas, no que elas são
          boas e como podem se conectar com projetos, equipes e oportunidades.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-3xl border border-gray-200 shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <p className="text-sm font-semibold text-green-600 dark:text-green-400 mb-2">Passo 1</p>
            <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100">Explore os perfis</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm">
              Navegue pela lista de talentos e veja informações como área, idioma, interesses e objetivos.
            </p>
          </div>

          <div className="p-6 bg-white rounded-3xl border border-gray-200 shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <p className="text-sm font-semibold text-green-600 dark:text-green-400 mb-2">Passo 2</p>
            <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100">Use os filtros</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm">
              Refine sua busca usando filtros inteligentes para encontrar perfis que combinam com o que você procura.
            </p>
          </div>

          <div className="p-6 bg-white rounded-3xl border border-gray-200 shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <p className="text-sm font-semibold text-green-600 dark:text-green-400 mb-2">Passo 3</p>
            <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100">Conecte-se</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm">
              A partir dos perfis, você pode decidir como se aproximar: convite, parceria, estudo em grupo, projeto, etc.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
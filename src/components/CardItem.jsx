// src/components/CardItem.jsx
import { useState } from "react";
import Modal from "../components/Modal";

function CardItem({ items, onConnectionChange }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="grid auto-rows-auto w-sm
      bg-white dark:bg-gray-800
      border border-gray-200 dark:border-gray-700
      rounded-3xl justify-items-center gap-4 px-6 py-6
      shadow-md hover:shadow-lg transition-all duration-300
      text-gray-900 dark:text-gray-100"
    >
      <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-green-500 shadow-md">
        <img
          className="w-full h-full object-cover"
          src={items.foto}
          alt={items.nome}
        />
      </div>

      <div className="flex flex-col text-center gap-3 mt-2">
        <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">
          {items.nome}
        </p>
        <p className="text-gray-600 dark:text-gray-300">{items.cargo}</p>
      </div>

      <div className="flex flex-wrap justify-center gap-2 mt-2 text-xs">
        {items.habilidadesTecnicas.map((skills) => (
          <p
            key={skills}
            className="px-3 py-1 rounded-full
            bg-green-100 text-green-700 border border-green-300
            dark:bg-green-900/40 dark:text-green-300 dark:border-green-500"
          >
            {skills}
          </p>
        ))}
      </div>

      <button
        onClick={() => setOpen(true)}
        className="border border-green-600 dark:border-green-400
        text-green-700 dark:text-green-300
        rounded-full min-w-xs py-2 px-4 mt-4
        bg-transparent
        hover:bg-green-600 hover:text-white
        dark:hover:bg-green-500 dark:hover:text-gray-900
        transition-all cursor-pointer"
      >
        Ver mais
      </button>

      <Modal
        open={open}
        setOpen={setOpen}
        {...items}
        onConnectionChange={onConnectionChange}
      />
    </div>
  );
}

export default CardItem;
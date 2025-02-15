"use client"

import { TodoItem } from "@/types/TodoItem";
import { useState } from "react";

function Page() {
  const [itemInput, setItemInput] = useState('');

  const [list, setList] = useState<TodoItem[]>([
    { id: 1,  label: 'Fazer dever de casa', checked: false },
    { id: 2, label: 'Comprar bolo', checked: true }
  ]);

  const handleAddButton = () => {
    if(itemInput.trim() === '') {
      alert('Digite algo...');
      return;
    };
    setList([...list, { id: list.length + 1, label: itemInput, checked: false} ]);
    setItemInput('');
  }

  const deleteItem = (id: number) => {
    setList(
      list.filter(item => item.id !== id)
  );
  }
  
  const toggleItem = (id: number) => {
    let newList = [...list];

    for(let i in newList) {
      if(newList[i].id === id) {
        newList[i].checked = !newList[i].checked;
      }
    }
    setList(newList);
  };
  
  return (
    <div className="w-screen h-screen flex flex-col items-center text-2xl">
      <h1 className="text-4xl mt-5">Lista de Tarefas</h1>
      <div className="flex w-full max-w-lg my-3 p-4 rounded-md bg-gray-700 border-2 border-gray-500">
        <input 
        type="text"
        placeholder="O que deseja fazer?"
        className="flex-1 border border-black p-3 text-2xl text-black rounded-md mr-3"
        value={itemInput}
        onChange={e => setItemInput(e.target.value)}
        />
        <button onClick={handleAddButton} className="bg-gray-500 rounded-md p-1">Adicionar</button>
      </div>

      <p className="my-4"><strong className="text-green-500">{list.length}</strong> Itens na Lista</p>

      <ul className="w-full max-w-lg list-disc pl-5">
        {list.map(item  => (
          <li key={item.id}>
            <input onClick={() => toggleItem(item.id)} type="checkbox" checked={item.checked} className="w-6 h-6 mr-3" />
              {item.label} - <button onClick={() => deleteItem(item.id)} className="hover:underline text-red-400">[ Deletar ]</button></li>
        ))}
      </ul>
    </div>
  );
}

export default Page;
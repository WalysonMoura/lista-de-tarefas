import Image from 'next/image'
import { ChangeEvent, FormEvent, useState } from "react";

import * as Style from "./style";

// Images - Icons
import { AiOutlinePlusCircle } from "react-icons/ai";
import { api } from '@/lib/axios';


interface Props {
  onAddTask: (taskTitle: string) => void;
}


export default function Header({ onAddTask }: Props) {
  const [title, setTitle] = useState("");

  async function createNewTasks(event: FormEvent) {
    event.preventDefault();
    try {
      await api.post("/tasks", title);
    } catch (error) {
      alert("Erro ao Criar Nova Tarefa");
    }

    onAddTask(title);
    setTitle("")
  }

  return (
    <Style.Conteiner>
   
      <Image
        src="../public/logo.png"
        alt="logo"
        width={500} 
         height={500}
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />

      <Style.Form onSubmit={createNewTasks}>
        <label htmlFor="title">Qual a Tarefa?</label>
        <input
          type="text"
          id="title"
          placeholder="Adicione uma nova tarefa"
          autoFocus
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <button type="submit">
          Criar
          <AiOutlinePlusCircle size={20} />
        </button>
      </Style.Form>
 
    </Style.Conteiner>
  );
}

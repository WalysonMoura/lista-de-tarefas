import { TbTrash } from "react-icons/tb";
import { BsFillCheckCircleFill } from "react-icons/bs";

import * as Style from "./style"


import { PropsTask } from "@/Types/Props";


export function Task({ task, onComplete, onDelete }:PropsTask) {
  return (
    <Style.Conteiner>
      <Style.CheckContainer 
        onClick={() => onComplete(task.id)}
      >
        {task.isCompleted ? <BsFillCheckCircleFill /> : <div />}
      </Style.CheckContainer >

      <p isCompleted={task.isCompleted }>
        {task.title}
      </p>

      <Style.DeleteButton onClick={() => onDelete(task.id)}>
        <TbTrash size={20} />
      </Style.DeleteButton>
    </Style.Conteiner>
  );
}

import { TbClipboardText } from "react-icons/tb";
import * as Style from './style'

import { Task } from "../Task";
import { PropsTasks } from "@/Types/Props";


export function NewTasks({ tasks, onComplete, onDelete }: PropsTasks) {

  const tasksQuantity = tasks.length;
  const completedTasks = tasks.filter((task) => task.isCompleted).length;

  return (
    <Style.Conteiner>
      <header>
        <div>
          <p>Tarefas criadas</p>
          <span>{tasksQuantity}</span>
        </div>

        <div>
          <p textPurple>Concluídas</p>
          <span>
            {completedTasks} de {tasksQuantity}
          </span>
        </div>
      </header>

      <Style.List>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onComplete={onComplete}
            onDelete={onDelete}
          />
        ))}

        {tasks.length <= 0 && (
          <Style.Empty>
            <TbClipboardText size={50} />
            <div>
              <p>Você ainda não tem tarefas cadastradas</p>
              <span>Crie tarefas e organize seus itens a fazer</span>
            </div>
          </Style.Empty>
        )}
      </Style.List>
    </Style.Conteiner>
  );
}
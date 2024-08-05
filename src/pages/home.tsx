import { CirclePlus } from "lucide-react";
import { Button } from "../components/button";
import { Header } from "../components/header";
import { Input } from "../components/input";
import { HeaderList } from "../components/list/list-header";
import { useState } from "react";
import { Empty } from "../components/list/empty";
import { Item } from "../components/list/item";

export interface ITask {
  id: number;
  text: string;
  isChecked: boolean;
}

export const Home = () => {
  const [tasks, setTasks] = useState<ITask[]>([]);

  function handleRemoveTask(id: number) {
    const filteredTasks = tasks.filter((task) => task.id !== id)

    if (!confirm('Deseja mesmo apagar essa tarefa?')) {
      return
    }

    setTasks(filteredTasks)
  }

  function handleToggleTask({ id, value }: { id: number; value: boolean }) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isChecked: value }
      }

      return { ...task }
    })

    setTasks(updatedTasks)
  }
  return (
    <main>
      <Header />

      <section className="max-w-screen-md w-full mx-auto">
        <div className="flex flex-1 justify-between gap-2">
          <Input />
          <Button>
            Criar
            <CirclePlus size={16} color="#f2f2f2" />
          </Button>
        </div>

        <div className="flex flex-col gap-6">
          <HeaderList />

          {tasks.length > 0 ? (
            <div>
              {tasks.map((task) => (
                <Item
                key={task.id}
                data={task}
                removeTask={handleRemoveTask}
                toggleTaskStatus={handleToggleTask}
                />
              ))}
            </div>
          ) : (
            <Empty />
          )}
        </div>
      </section>
    </main>
  );
};

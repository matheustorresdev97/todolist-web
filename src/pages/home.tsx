import { CirclePlus } from "lucide-react";
import { Button } from "../components/button";
import { Header } from "../components/header";
import { Input } from "../components/input";
import { HeaderList } from "../components/list/list-header";
import { useEffect, useState } from "react";
import { Empty } from "../components/list/empty";
import { Item } from "../components/list/item";
import { api } from "../lib/axios";

export interface ITask {
  id: string;
  task_description: string;
  created_at?: Date;
  update_at?: Date;
  is_completed: boolean;
}

export const Home = () => {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [inputValue, setInputValue] = useState("");

  async function getTasks() {
    try {
      const { data } = await api.get("/tasks");
      setTasks(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getTasks();
  }, []);

  const checkedTasksCounter = tasks.reduce((prevValue, currentTask) => {
    return currentTask.is_completed ? prevValue + 1 : prevValue;
  }, 0);

  async function handleAddTask() {
    if (!inputValue) {
      return;
    }

    try {
      const { data } = await api.post("/task", {
        task_description: inputValue,
        is_completed: false,
      });

      setTasks((state) => [...state, data]);
      setInputValue("");
    } catch (error) {
      console.error("Error adding task:", error);
    }
  }

  async function handleRemoveTask(id: string) {
    if (!confirm("Deseja mesmo apagar essa tarefa?")) {
      return;
    }

    try {
      await api.delete(`/task/${id}`);
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    } catch (error) {
      console.error("Error removing task:", error);
    }
  }

  async function handleToggleTask({
    id,
    value,
  }: {
    id: string;
    value: boolean;
  }) {
    await api.patch(`/task/${id}`, { is_completed: value });

    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, is_completed: value };
      }
      return task;
    });

    setTasks(updatedTasks);
  }

  return (
    <main>
      <Header />

      <section className="max-w-screen-md w-full mx-auto">
        <div className="flex flex-1 justify-between gap-2">
          <Input
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
          />
          <Button onClick={handleAddTask}>
            Criar
            <CirclePlus size={16} color="#f2f2f2" />
          </Button>
        </div>

        <div className="flex flex-col gap-6">
          <HeaderList
            tasksCounter={tasks.length}
            checkedTasksCounter={checkedTasksCounter}
          />

          {tasks.length > 0 ? (
            <div className="flex flex-col gap-2">
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

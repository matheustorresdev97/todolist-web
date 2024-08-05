interface Props {
  tasksCounter: number
  checkedTasksCounter: number
}

export function HeaderList({ tasksCounter, checkedTasksCounter }: Props) {
  return (
    <header className="flex flex-1 items-center justify-between">
      <aside className="flex items-center gap-2 font-bold">
        <p className="text-blue-default text-sm">Tarefas criadas</p>
        <span>{tasksCounter}</span>
      </aside>

      <aside className="flex items-center gap-2 font-bold">
        <p className="text-purple-default text-sm">Concluídas</p>
        <span className="py-[2px] px-2 rounded-2xl text-sm text-gray-200 bg-gray-400">
          {tasksCounter === 0
            ? tasksCounter
            : `${checkedTasksCounter} de ${tasksCounter}`}
        </span>
      </aside>
    </header>
  );
}

export function Empty() {
    return (
      <div className="py-16 border-t border-solid border-gray-400 rounded-lg flex flex-col items-center gap-4 text-gray-300">
        <img src="/clipboard.png" alt="ícone de prancheta" />
        <p className="flex flex-col">
          <strong>Você ainda não tem tarefas cadastradas</strong>
          Crie tarefas e organize seus itens a fazer
        </p>
      </div>
    )
  }
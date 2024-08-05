import { Check, Trash } from 'lucide-react'
import { ITask } from '../../pages/home'

interface Props {
  data: ITask
  removeTask: (id: number) => void
  toggleTaskStatus: ({ id, value }: { id: number; value: boolean }) => void
}

export function Item({ data, removeTask, toggleTaskStatus }: Props) {
  function handleTaskToggle() {
    toggleTaskStatus({ id: data.id, value: !data.isChecked })
  }

  function handleRemove() {
    removeTask(data.id)
  }

  return (
    <div className="flex flex-1 gap-3 items-center justify-between bg-gray-500 border border-solid border-gray-400">
      <div className='flex'>
        <label className='flex p-1 items-center gap-x-3' htmlFor="checkbox" onClick={handleTaskToggle}>
          <input className='hidden' readOnly type="checkbox" checked={data.isChecked} />
          <span
            className={`rounded-full h-5 w-5 flex items-center justify-center ${
              data.isChecked
                ? 'border-2 border-solid border-purple-dark bg-purple-light'
                : 'border-2 border-solid border-blue-default bg-blue-light'
            }`}
          >
            {data.isChecked && <Check size={12} />}
          </span>

          <p
            className={`font-sm leading-5 select-none transition ${
              data.isChecked ? 'underline text-gray-300' : ''
            }`}
          >
            {data.text}
          </p>
        </label>
      </div>

      <button
        className='border-none bg-transparent rounded pt-1 px-2 pb-1 transition hover:bg-gray-400'
        onClick={handleRemove}
      >
        <Trash size={16} color="#808080" />
      </button>
    </div>
  )
}

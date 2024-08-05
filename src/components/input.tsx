export function Input({
  ...rest
}: React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>) {
  return (
    <input
      className="border border-solid border-gray-700 rounded-lg bg-gray-500 text-gray-100 h-12 
      p-4 w-full leading-5 placeholder:text-gray-300 focus:text-purple-dark mb-9"
      placeholder="Adicione uma nova tarefa"
      {...rest}
    />
  );
}

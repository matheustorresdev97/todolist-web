type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

export function Button({ children, ...rest }: Props) {
  return (
    <button className="flex items-center justify-center h-12 p-4 bg-blue-dark text-gray-100 border-none rounded-lg gap-2 leading-5 font-bold text-sm transition hover:bg-blue-default" {...rest}>
      {children}
    </button>
  )
}
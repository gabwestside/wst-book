interface HeaderProps {
  title: string
}

export function Header({ title }: HeaderProps) {
  return(
    <p className="text-black text-3xl font-bold">
      {title}
    </p>
  )
}
interface HeaderTitleProps {
  title: string
}

export function HeaderTitle({ title }: HeaderTitleProps) {
  return(
    <p className="text-black text-3xl font-bold">
      {title}
    </p>
  )
}
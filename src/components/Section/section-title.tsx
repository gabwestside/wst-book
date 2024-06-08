interface SectionTitleProps {
  title: string
}

export function SectionTitle({ title }: SectionTitleProps) {
  return (
    <div className='text-4xl border-b-4 border-b-evergreen-100 w-fit font-bold text-evergreen-200'>
      {title}
    </div>
  )
}

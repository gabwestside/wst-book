import { TitleProps } from '../../types'

export function SectionTitle({ title }: TitleProps) {
  return (
    <div className='text-4xl border-b-4 border-b-evergreen-100 w-fit font-bold text-evergreen-200'>
      {title}
    </div>
  )
}

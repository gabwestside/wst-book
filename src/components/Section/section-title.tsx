import classNames from 'classnames'
import { TitleProps } from '../../types'

export function SectionTitle({ title, className }: TitleProps) {
  return (
    <div
      className={classNames([
        'md:text-4xl text-2xl border-b-4 border-b-evergreen-100 w-fit font-bold text-evergreen-200',
        className,
      ])}
    >
      {title}
    </div>
  )
}

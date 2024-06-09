import { TitleProps } from '../../types'

export function HeaderTitle({ title }: TitleProps) {
  return <p className='text-black text-3xl font-bold'>{title}</p>
}

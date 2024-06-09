import { ContainerProps } from '../../types'

export function Container({ children }: ContainerProps) {
  return (
    <div className='px-4 md:px-5 py-4 max-w-7xl max-auto w-full'>
      {children}
    </div>
  )
}

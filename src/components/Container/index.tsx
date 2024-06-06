import { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
}

export function Container({ children }: ContainerProps) {
  return (
    <div className='px-2 md:px-5 py-4 max-w-7xl max-auto w-full'>
      {children}
    </div>
  )
}

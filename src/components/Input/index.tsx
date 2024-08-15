import { InputProps } from '../../types'
import { forwardRef } from 'react'

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ ...props }: InputProps, ref) => {
    return (
      <input
        {...props}
        ref={ref}
        className='w-full border border-gray-100 outline-none shadow-lg rounded-lg p-4 my-4'
      />
    )
  }
)

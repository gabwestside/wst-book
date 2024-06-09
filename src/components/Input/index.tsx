import { InputProps } from '../../types'

export function Input({ ...props }: InputProps) {
  return (
    <input
      {...props}
      className='w-full border border-gray-100 outline-none shadow-lg rounded-lg p-4 my-4'
    />
  )
}

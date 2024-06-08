type InputProps = React.InputHTMLAttributes<HTMLInputElement>

export default function Input({ ...props }: InputProps) {
  return (
    <input
      {...props}
      className='w-full border border-gray-100 outline-none shadow-lg rounded-lg p-4 my-4'
    />
  )
}

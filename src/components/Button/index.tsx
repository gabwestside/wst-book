import classNames from 'classnames'
import { ReactNode } from 'react'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: ReactNode
  className?: string
  variant?: 'primary' | 'outline'
}

export function Button({
  children,
  variant = 'primary',
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={classNames([
        'px-5 py-3 my-5 rounded-lg mt-2 shadow font-medium',
        variant === 'primary' &&
          'bg-evergreen-100 text-white hover:bg-emerald-500',
        variant === 'outline' &&
          'bg-white border-2 border-evergreen-100 text-evergreen-100 hover:bg-evergreen-100 hover:text-white',
        className,
      ])}
    >
      {children}
    </button>
  )
}
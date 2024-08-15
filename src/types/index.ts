import { ReactNode } from 'react'

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'outline'
}

export type BookInfosProps = {
  name: string
  author: string
  bookId: string
  tag: string
  overview: string
  bookCover: string
}

export type ContainerProps = {
  children: ReactNode
}

export type TitleProps = {
  title: string
  className?: string
}

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>

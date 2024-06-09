import { useCallback } from 'react'

type TagProps = {
  title: string
}

export function Tag({ title }: TagProps) {
  const randomColors = useCallback(() => {
    const number = Math.floor(Math.random() * 360)
    const light = `hsl(${number}, 100%, 95%)`
    const dark = `hsl(${number}, 100%, 20%)`

    return { light, dark }
  }, [])

  return (
    <p
      style={{
        backgroundColor: randomColors().light,
        color: randomColors().dark,
      }}
      className='rounded-full bg-opacity-50 text-center w-fit px-6 py-1'
    >
      {title}
    </p>
  )
}

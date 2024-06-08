import { Button } from '../Button'

type BookInfosProps = {
  name: string
  author: string
  tag: string
  overview: string
}

export function Card({ name, author, overview, tag }: BookInfosProps) {
  return (
    <div className='flex flex-row shadow-lg rounded-lg border border-gray-100 max-w-lg w-full my-6 p-2'>
      <img className='' src='' alt='' />
      <div className='flex flex-col gap-4'>
        <p className='text-2xl font-bold'>{name}</p>
        <p className='text-sm text-gray-500'>{author}</p>
        <p>{tag}</p>
        <p className='text-left'>
          <strong>Overview: </strong>
          {overview}
        </p>
        <Button variant='outline' className='max-w-48'>
          See more
        </Button>
      </div>
    </div>
  )
}

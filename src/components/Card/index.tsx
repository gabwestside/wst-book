import { BookInfosProps } from '../../types'
import { Button } from '../Button'
import { Tag } from '../Tag'

export function Card({
  name,
  author,
  overview,
  tag,
  bookCover,
}: BookInfosProps) {
  return (
    <div className='grid grid-cols-3 items-center gap-4 shadow-xl rounded-lg border border-gray-100 max-w-lg w-full my-6 p-2'>
      <img className='col-span-1 w-full' src={bookCover} alt='Book Cover' />
      <div className='col-span-2 flex flex-col gap-4'>
        <p className='text-2xl font-bold'>{name}</p>
        <p className='text-sm text-gray-500 font-light'>{author}</p>
        <Tag title={tag} />
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

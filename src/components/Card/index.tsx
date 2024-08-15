import { useNavigate } from 'react-router-dom'
import { BookInfosProps } from '../../types'
import { Button } from '../Button'
import { Tag } from '../Tag'
import { useCallback } from 'react'

export function Card({
  name,
  author,
  overview,
  tag,
  bookCover,
  bookId: id,
}: BookInfosProps) {
  const navigate = useNavigate()

  const handleNavigateDetails = useCallback(() => {
    navigate(`/${id}`)
  }, [id, navigate])

  return (
    <div className='grid grid-cols-3 items-center gap-4 shadow-xl rounded-lg border border-gray-100 max-w-lg w-full my-6 p-2'>
      <img className='col-span-1 w-full' src={bookCover} alt='Book Cover' />
      <div className='col-span-2 flex flex-col gap-1'>
        <p className='text-2xl font-bold'>{name}</p>
        <p className='text-sm text-gray-500 font-light'>{author}</p>
        <Tag title={tag} />
        <p className='text-left'>
          <strong>Overview: </strong>
          {overview}
        </p>
        <Button
          variant='outline'
          className='w-1/2'
          onClick={handleNavigateDetails}
        >
          See more
        </Button>
      </div>
    </div>
  )
}

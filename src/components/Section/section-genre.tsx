import { useCallback, useState } from 'react'
import { bookGenre } from '../../data/genre'
import { Button } from '../Button'
import { Container } from '../Container'
import { Input } from '../Input'
import { SectionTitle } from './'

export function SectionGenre() {
  const [selectedGenre, setSelectedGenre] = useState([''])

  const handleSelectGenre = useCallback(
    (value: string) => {
      if (selectedGenre.includes(value)) {
        const removeGenre = selectedGenre.filter((item) => item !== value)
        setSelectedGenre(removeGenre)
      } else {
        setSelectedGenre([...selectedGenre, value])
      }
    },
    [selectedGenre]
  )

  return (
    <Container>
      <SectionTitle title='What do you want to read today?' />
      <div className='grid grid-cols-8 gap-6 my-4'>
        {bookGenre.map((book, i) => {
          return (
            <Button
              variant={selectedGenre.includes(book) ? 'primary' : 'outline'}
              onClick={() => handleSelectGenre(book)}
              key={i}
            >
              {book}
            </Button>
          )
        })}
      </div>
      <div className='py-4 flex flex-col gap-4'>
        <p className='text-evergreen-200 font-semibold text-2xl'>
          What would you like a book recommendation on?
        </p>
        <Input type='text' placeholder="I'd like to read..." />
      </div>
    </Container>
  )
}

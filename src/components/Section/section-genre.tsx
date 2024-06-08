import classNames from 'classnames'
import { bookGenre } from '../../data/genre'
import { Button } from '../Button'
import { Container } from '../Container'
import { SectionTitle } from './section-title'
import { useCallback, useState } from 'react'

export function SectionGenre() {
  const [selectedGenre, setSelectedGenre] = useState([''])

  console.log(selectedGenre)

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
      <div
        className={classNames([
          `grid grid-cols-${8} gap-6 my-4`,
        ])}
      >
        {bookGenre.map((book, i) => {
          return (
            <Button
              variant='outline'
              onClick={(e) => handleSelectGenre(e.currentTarget.value)}
              key={i}
            >
              {book}
            </Button>
          )
        })}
      </div>
    </Container>
  )
}

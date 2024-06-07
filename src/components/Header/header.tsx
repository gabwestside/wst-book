import bg from '../../assets/img/bg-header.png'
import { Container } from '../Container/container'
import { HeaderTitle } from './header-title'

export function Header() {
  return (
    <header
      style={{
        backgroundImage: `url(${bg})`
      }}
      className='w-auto bg-cover bg-center bg-no-repeat'
    >
      <Container>
        <HeaderTitle title='FindBook' />
        <div className='mt-20'>
          <p className='text-7xl font-extrabold text-evergreen-200'>
            Find a book that <br /> suits you!
          </p>
          <p className='text-gray-600 my-3 text-xl'>
            Lorem Ipsum dolor sit amet
          </p>
          <button className='px-6 py-3 my-5 rounded-lg bg-evergreen-100 text-white hover:bg-emerald-500 mt-2 shadow font-medium'>
            Search books
          </button>
        </div>
      </Container>
    </header>
  )
}

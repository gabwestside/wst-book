import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { BookDetails } from '../pages/BookDetails'
import { Home } from '../pages/Home'

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<BookDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

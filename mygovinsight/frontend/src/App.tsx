import { Routes, Route } from 'react-router'
import LandingPage from './container/LandingPage'
import LisitingsPage from './container/LisitingsPage'

function App() {

  return (
    <>
   <Routes>
    <Route path='/' element={<LandingPage />}/>
    <Route path='/listings' element={<LisitingsPage />} />
   </Routes>
   </>
  )
}

export default App

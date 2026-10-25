import { Routes, Route } from 'react-router-dom'
import Gift from '../pages/Gift/Gift.jsx'
// import Hello from '../pages/Hello.jsx'
import NotFound from '../pages/NotFound/NotFound.jsx'
// import Secret from '../pages/Secret.jsx'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Gift />} />
      {/* <Route path='/gift' element={<Hello />} />
      <Route path='/flamingo' element={<Secret />} /> */}
      <Route path='*' element={<NotFound />} /> 
    </Routes>
  )
}

export default App

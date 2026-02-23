
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Landing from './pages/landing'
function App() {

  return (
    <div>
      <Routes>
      <Route path="/" element={<Landing/>}></Route>
      </Routes>
    </div>
    
  )
}

export default App

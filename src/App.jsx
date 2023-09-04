import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import AllComments from './Components/Comments/AllComments'
import AllTopics from './Components/Topics/AllTopics'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/comments" element={<AllComments />} />
      <Route path="/topics" element={<AllTopics />} />
    </Routes>
    </>
  )
}

export default App

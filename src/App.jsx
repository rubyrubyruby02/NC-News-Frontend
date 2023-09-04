import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import AllComments from './Components/Comments/AllComments'
import AllTopics from './Components/Topics/AllTopics'
import IndividualArticle from './Components/Articles/IndividualArticle'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/comments" element={<AllComments />} />
      <Route path="/topics" element={<AllTopics />} />
      <Route path="/individual_article" element={<IndividualArticle />} />
    </Routes>
    </>
  )
}

export default App

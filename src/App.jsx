import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import AllComments from './Components/Comments/AllComments'
import AllTopics from './Components/Topics/AllTopics'
import IndividualArticle from './Components/Articles/IndividualArticle'
import AddNewComment from './Components/Comments/AddNewComment'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:article_id/comments" element={<AllComments />} />
      <Route path="/topics" element={<AllTopics />} />
      <Route path="/:article_id" element={<IndividualArticle />} />
      <Route path="/:article_id/comments/add_a_comment" element={<AddNewComment />} />
    </Routes>
    </>
  )
}

export default App

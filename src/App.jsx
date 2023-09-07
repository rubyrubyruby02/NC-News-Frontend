import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import AllComments from './Components/Comments/AllComments'
import AllTopics from './Components/Topics/AllTopics'
import IndividualArticle from './Components/Articles/IndividualArticle'
import AddNewComment from './Components/Comments/AddNewComment'
import Cooking from './Components/Topics/Cooking'
import Coding from './Components/Topics/Coding'
import Football from './Components/Topics/Football'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:article_id/comments" element={<AllComments />} />
      <Route path="/:article_id" element={<IndividualArticle />} />
      <Route path="/:article_id/comments/add_a_comment" element={<AddNewComment />} />
      <Route path="/articles" element={<AllTopics />} />
      <Route path="/articles/cooking" element={<Cooking />} />
      <Route path="/articles/coding" element={<Coding />} />
      <Route path="/articles/football" element={<Football />} />
    </Routes>
    </>
  )
}

export default App

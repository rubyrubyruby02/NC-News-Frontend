import { Route, Routes } from 'react-router-dom'
import AllComments from './Components/Comments/AllComments'
import IndividualArticle from './Components/Articles/IndividualArticle'
import AddNewComment from './Components/Comments/AddNewComment'
import AllArticles from './Components/Articles/AllArticles'

function App() {

  return (
    <>
    <Routes>
      <Route path="/articles" element={<AllArticles />} />
      <Route path="/:article_id/comments" element={<AllComments />} />
      <Route path="/articles/:article_id" element={<IndividualArticle />} />
      <Route path="/articles/:article_id/comments/add_a_comment" element={<AddNewComment />} />
      <Route path="/articles" element={<AllArticles />} />
    </Routes>
    </>
  )
}

export default App

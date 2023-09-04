import {Link} from 'react-router-dom'
import IndividualArticle from './IndividualArticle'

const ArticleCard = ({article}) => {
    
        return (
          <>
            <div className="card">
                <img className="card-img-top" src={article.article_img_url} alt={article.title}></img>
            <div className="card-body">
              <h5 className="card-title">{article.title}</h5>
              <p className="card-text">Topic: {article.topic}</p>
              <p className="card-text">Author: {article.author}</p>
              <p className="card-text">Comments: {article.comment_count}</p>
              <p className="card-text">Votes: {article.votes}</p>
              <Link to={`/${article.article_id}`}>
                <button className="btn btn-primary"> View article in detail</button>
              </Link>
            </div>
          </div>

        </>
        )   
}

export default ArticleCard
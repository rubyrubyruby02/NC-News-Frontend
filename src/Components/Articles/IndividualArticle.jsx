import { useEffect, useState } from "react";
import Header from "../Header";
import Loading from "../ErrorAndLoading/Loading";
import AllComments from "../Comments/AllComments";
import { useParams } from "react-router-dom";
import { getIndividualArticle } from "../../../Utils/apiRequests.js";
import {Link} from 'react-router-dom'
import UpVoteCounter from "../Votes/UpVoteCounter";
import DownVoteCounter from "../Votes/DownVoteCounter";


const IndividualArticle = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});

  const [votesTotal, setVotesTotal]= useState()
 
  useEffect(() => {
    getIndividualArticle(article_id)
    .then(({ result }) => {
      setArticle(result);
      setVotesTotal(result.votes)
    });
  }, [article_id]);

  

  const [isLoading, setisLoading] = useState(false)

  useEffect(() => {
    setisLoading(true)

    getIndividualArticle(article_id).then(({ result }) => {
      setArticle(result);
      setisLoading(false)
    });
  }, [article_id]);

  if(isLoading) return <Loading />


  return (
    <>
      <Header />
      <h4 id="titleColouredBand">Article Number: {article_id}</h4>
      <article>
        <div className="card">
          <img
            className="card-img-top"
            id="img-IndividualArticles"
            src={article.article_img_url}
            alt={article.title}
          ></img>
          <div className="card-body">
            <h3 className="card-title">{article.title}</h3>
            <h4 className="card-text">{article.author}</h4>
            <p>{article.body}</p>
            <p>{article.created_at}</p>

            <Link to={`/${article_id}/comments/add_a_comment`} className="btn btn-dark">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-chat-left-text-fill"
                  viewBox="0 0 16 16">
                  <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793V2zm3.5 1a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5z" />
                </svg>
                {"   "}
                {article.comment_count}
              </span>
              </Link>

            <span className="btn btn-secondary">{votesTotal} votes</span>

            <UpVoteCounter articleVotes={article} setVotesTotal={setVotesTotal} votesTotal={votesTotal}/>

            <DownVoteCounter articleVotes={article} setVotesTotal={setVotesTotal} votesTotal={votesTotal}/>

            <Link to={`/articles?topic=${article.topic}`} className="btn btn-info">
            <span>{article.topic}</span>
            </Link>
          </div>
        </div>

        <AllComments />
      </article>
    </>
  );
};

export default IndividualArticle;

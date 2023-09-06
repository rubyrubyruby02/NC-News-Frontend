import { Link } from "react-router-dom";
import UpVoteCounter from "../Votes/UpVoteCounter";
import DownVoteCounter from "../Votes/DownVoteCounter";
import { useState } from "react";

const ArticleCard = ({ article }) => {
  console.log(article);
  const [votesTotal, setVotesTotal] = useState(article.votes);

  return (
    <div className="card">
      <img
        className="card-img-top"
        src={article.article_img_url}
        alt={article.title}
      ></img>
      <div className="card-body">
        <h3 className="card-title">{article.title}</h3>
        <h4 className="card-text">{article.author}</h4>

        <Link to={`${article.article_id}/comments`}>
          <span className="btn btn-dark">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-chat-left-text-fill"
              viewBox="0 0 16 16"
            >
              <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793V2zm3.5 1a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5z" />
            </svg>
            {"   "}
            {article.comment_count}
          </span>
        </Link>

        <UpVoteCounter
          articleVotes={article}
          setVotesTotal={setVotesTotal}
          votesTotal={votesTotal}
        />

        <DownVoteCounter articleVotes={article} setVotesTotal={setVotesTotal} votesTotal={votesTotal}/>


        <button className="btn btn-info">{article.topic}</button>
        <Link to={`${article.article_id}`}>
          <span className="btn btn-primary">View details</span>
        </Link>
      </div>
    </div>
  );
};

export default ArticleCard;

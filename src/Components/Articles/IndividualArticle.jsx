import { useEffect, useState} from 'react';
import Header from '../Header'
import { useParams } from 'react-router-dom';
import getIndividualArticle from '../../../Utils.js/getIndividualArticle';

const IndividualArticle = () => {

    const { article_id } = useParams();
    const [article, setArticle] = useState({})

    useEffect(()=> {
        getIndividualArticle(article_id)
        .then(({result})=>{
            console.log(result)
            setArticle(result)
        })
    }, [article_id])

    return (
        <>
         <Header />
         <article>
         <h3>{article.title}</h3>
         <p>Comments: {article.comment_count}</p>
         <p>Votes: {article.votes}</p>
         <p>Topic: {article.topic}</p>
         <p>Author: {article.author}</p>
         <p>Blurb: {article.body}</p>

         </article>
        </>
    )
}

export default IndividualArticle
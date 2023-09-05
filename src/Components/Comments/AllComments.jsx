import Header from "../Header"
import {useState, useEffect} from 'react'
import {getCommentsOnArticle} from "../../../Utils/apiRequests.js"
import { useParams } from "react-router-dom";
import CommentCard from "./CommentCard";

const AllComments = () => {
    
    const { article_id } = useParams();
    const [comments, setComments] = useState([])

    useEffect(()=> {
        getCommentsOnArticle(article_id)
        .then(({comments})=> {
            setComments(comments)
        })
    }, [])

    return (
        <>
        <Header />
        <h3>Article Number: {article_id}</h3>
        <section>
            {comments.map((comment)=> {
                return (
                <>
                <CommentCard key={comment.comment_id} comment={comment} />
                </>
                )              
            })}
        </section>
        </>
    )
}

export default AllComments
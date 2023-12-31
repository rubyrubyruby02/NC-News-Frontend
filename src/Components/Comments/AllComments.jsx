import Header from "../Header"
import Loading from "../ErrorAndLoading/Loading";
import {useState, useEffect} from 'react'
import {getCommentsOnArticle} from "../../../Utils/apiRequests.js"
import { useParams } from "react-router-dom";
import CommentCard from "./CommentCard";

const AllComments = () => {
    
    const { article_id } = useParams();

    const [comments, setComments] = useState([])
    const [isLoading, setisLoading] = useState(false)
    const [noComments, setNoComments]=useState(false)

    useEffect(()=> {
        setisLoading(true)

        getCommentsOnArticle(article_id)
        .then(({comments})=> {

            if(comments.length === 0){
                setisLoading(false)
                setNoComments(true)
            }
            else {
                setComments(comments)
                setisLoading(false)
            }
        })
    }, [])

    if(isLoading) return <Loading />

    return (
        <>
        <section> 
            {noComments ? (<h3>No comments yet</h3>) : comments.map((comment)=> {
                return (
                <div key={comment.comment_id}>
                <CommentCard comment={comment} />
                </div>
                )              
            })}
        </section>
        </>
    )
}

export default AllComments
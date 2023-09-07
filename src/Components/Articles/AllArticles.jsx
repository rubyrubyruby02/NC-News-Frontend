import { useEffect, useState } from "react"
import {getAllArticles} from "../../../Utils/apiRequests.js"
import ArticleCard from "./ArticleCard"

const AllArticles = () => {

    const [articles, setArticles] = useState([])
    const [topic, setTopic]= useState("")

    useEffect(()=> {
        getAllArticles(topic)
        .then(({articles})=> {
            setArticles(articles)
        })
    }, [articles])


    return (
        <>
        <section>
            {articles.map((article)=> {
                return (
                    <ArticleCard key={article.article_id} article={article}/>)
            })}
        </section>
        </>
    )
}

export default AllArticles
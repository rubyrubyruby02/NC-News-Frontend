import { useEffect, useState } from "react"
import {getAllArticles} from "../../../Utils/apiRequests.js"
import ArticleCard from "./ArticleCard"

const AllArticles = () => {

    const [articles, setArticles] = useState([])

    useEffect(()=> {
        getAllArticles()
        .then(({articles})=> {
            setArticles(articles)
        })
    }, [])


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
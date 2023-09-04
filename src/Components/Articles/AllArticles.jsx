import { useEffect, useState } from "react"
import getAllArticle from "../../../Utils.js/getAllArticles"
import ArticleCard from "./ArticleCard"

const AllArticles = () => {

    const [articles, setArticles] = useState([])

    useEffect(()=> {
        getAllArticle()
        .then(({articles})=> {
            setArticles(articles)
        })
    }, [])


    return (
        <>
        <section>
            {articles.map((article)=> {
                return (
                    <ArticleCard key={article.id} article={article}/>)
            })}
        </section>
        </>
    )
}

export default AllArticles
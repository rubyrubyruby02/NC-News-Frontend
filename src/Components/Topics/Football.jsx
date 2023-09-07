import Header from "../Header"
import ArticleCard from "../Articles/ArticleCard";
import { getAllArticles } from "../../../Utils/apiRequests";
import { useState, useEffect } from "react"

const Football = () => {

    const [articles,  setArticles]=useState([])
    const [topic, setTopic]= useState("football")

    useEffect(()=> {
        getAllArticles(topic)
        .then(({articles}) => {
            setArticles(articles)
        })
    }, [articles])

    return (
        <>
        <Header />
        <section>
            {articles.map((article)=> {
                return (
                    <ArticleCard key={article.article_id} article={article}/>)
            })}
        </section>
        </>
    )
}

export default Football
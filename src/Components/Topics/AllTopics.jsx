import { getAllArticles } from "../../../Utils/apiRequests"
import Header from "../Header"
import { useState, useEffect } from "react"
import ArticleCard from "../Articles/ArticleCard"
import { useSearchParams } from "react-router-dom"

const AllTopics = () => {

    const [articles,  setArticles]=useState([])
    const [topic, setTopic]= useState("")

    useEffect(()=> {
        getAllArticles(topic)
        .then(({articles}) => {
            setArticles(articles)
        })
    }, [articles])

    const changeCategory = (selectedTopic) => {
        setTopic(selectedTopic)
    }

    

    return (
        <>
        <Header />

        <section className="topicButtons">
            <button className="btn btn-info" onClick={()=> changeCategory("cooking")}>Cooking</button>
            <button className="btn btn-info"  onClick={()=> changeCategory("coding")}>Coding</button>
            <button className="btn btn-info" onClick={()=> changeCategory("football")}>Football</button>
            <button className="btn btn-info" onClick={()=> changeCategory("")}>All topics</button>
        </section>

        <section>
            {articles.map((article)=> {
                return (
                    <ArticleCard key={article.article_id} article={article}/>)
            })}
        </section>
        </>
        
    )
}

export default AllTopics
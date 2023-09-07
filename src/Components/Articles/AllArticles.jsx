import { useEffect, useState} from "react"
import {getAllArticles} from "../../../Utils/apiRequests.js"
import ArticleCard from "./ArticleCard"
import { useSearchParams } from 'react-router-dom';
import Header from "../Header.jsx";


const AllArticles = () => {

    const [articles, setArticles] = useState([])

    const [searchParams, setSearchParams] = useSearchParams();

    const topic = searchParams.get("topic"); 
    const sortby = searchParams.get("sort_by")

    const setSortOrder = (direction) => {
        const newParams = new URLSearchParams(searchParams);
        newParams.set('topic', direction);
        setSearchParams(newParams);
      };


    useEffect(()=> {
        getAllArticles(searchParams)
        .then(({articles})=> {
            setArticles(articles)
        })
    }, [topic, sortby])


    return (
        <>
        <Header />

        <section id="titleColouredBand">
            <button className="btn btn-secondary" onClick={()=> {setSortOrder('votes')}}>Sort by Votes</button>
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

export default AllArticles
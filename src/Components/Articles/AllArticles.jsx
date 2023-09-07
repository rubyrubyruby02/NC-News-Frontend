import { useEffect, useState} from "react"
import {getAllArticles, getArticlesWithQueries} from "../../../Utils/apiRequests.js"
import ArticleCard from "./ArticleCard"
import { useSearchParams } from 'react-router-dom';


const AllArticles = () => {

    const [articles, setArticles] = useState([])
    const [topic, setTopic]= useState("")

    const [searchParams, setSearchParams] = useSearchParams();

    const sortByVotes = searchParams.get("sort_by"); 


    const setSortOrder = (direction) => {
        const newParams = new URLSearchParams(searchParams);
        newParams.set('sort_by', direction);
        setSearchParams(newParams);
      };


    useEffect(()=> {
        getArticlesWithQueries(searchParams)
        .then(({articles})=> {
            setArticles(articles)
        })

      }, [sortByVotes])

    useEffect(()=> {
        getAllArticles(topic)
        .then(({articles})=> {
            setArticles(articles)
        })
    }, [])


    return (
        <>
        <section id="titleColouredBand">
            <button className="btn btn-secondary" onClick={()=> {setSearchParams({sort_by : 'votes'})}}>Sort by Votes</button>
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
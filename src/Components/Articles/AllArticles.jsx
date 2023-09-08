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
    const orderby = searchParams.get("order")

    const setSortOrder = (direction) => {
        const newParams = new URLSearchParams(searchParams);
        
        if(direction === 'votes' || direction === 'created_at' || direction === 'author'){
            newParams.set('sort_by', direction);
        }
        else if(direction === 'asc' || direction === 'desc'){
            newParams.set('order', direction)
        }
        else{
            newParams.set('topic', direction);
        }
        setSearchParams(newParams);
      };


    useEffect(()=> {
        getAllArticles(searchParams)
        .then(({articles})=> {
            setArticles(articles)
        })
    }, [topic, sortby, orderby])


    return (
        <>
        <Header />

        <section id="titleColouredBand">
            <button className="btn btn-outline-light" onClick={()=> {setSortOrder('votes')}}>Sort by Votes</button>
            <button className="btn btn-outline-light" onClick={()=> {setSortOrder('created_at')}}>Date</button>
            <button className="btn btn-outline-light" onClick={()=> {setSortOrder('author')}}>Author</button>
            <button className="btn btn-outline-light" onClick={()=> {setSortOrder('asc')}}>Ascending</button>
            <button className="btn btn-outline-light" onClick={()=> {setSortOrder('desc')}}>Descending</button>
            <button className="btn btn-outline-light" onClick={()=> {setSearchParams()}}>Clear filters</button>
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
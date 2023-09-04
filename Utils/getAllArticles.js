import axios from "axios"

const axiosInstance = axios.create({
    baseURL: 'https://rubys-northcoders-news.onrender.com/api/articles', 
    timeout: 1000, 
    headers: {}
})
    

const getAllArticles = () => {
    return axiosInstance.get()
    .then(({data})=> {
        return data
    })
}

const getIndividualArticle = (article_id) => {
    
    console.log(article_id, "in get req")

    return axiosInstance.get(`/${article_id}`)
    .then(({data})=> {
        return data
    })
}

export {getAllArticles, getIndividualArticle}






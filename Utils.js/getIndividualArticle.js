import axios from 'axios'

const baseURL = "https://rubys-northcoders-news.onrender.com/api/articles/"

const getIndividualArticle = (article_id) => {

    return axios.get(`${baseURL}${article_id}`)
    .then(({data})=> {
        return data
    })
}

export default getIndividualArticle
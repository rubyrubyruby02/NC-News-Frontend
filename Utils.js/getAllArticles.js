import axios from "axios"

const baseURL = "https://rubys-northcoders-news.onrender.com/api/articles"

const getAllArticle = () => {
    return axios.get(`${baseURL}`)
    .then(({data})=> {
        return data
    })
}

export default getAllArticle
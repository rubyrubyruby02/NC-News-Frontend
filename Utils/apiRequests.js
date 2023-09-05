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
    return axiosInstance.get(`/${article_id}`)
    .then(({data})=> {
        return data
    })
}

const getCommentsOnArticle = (article_id) => {
    return axiosInstance.get(`/${article_id}/comments`)
    .then(({data}) =>{
        return data
    })
}


const patchVotesforArticle = (increaseVotes) => {

    console.log(increaseVotes, "in patch req")


    return axiosInstance.patch(`/${increaseVotes.article_id}`, increaseVotes)
    .then(({data}) => {

        console.log(data, "data")
        return data
    })
}

export {getAllArticles, getIndividualArticle, getCommentsOnArticle, patchVotesforArticle}






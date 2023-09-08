import axios from "axios"

const axiosInstance = axios.create({
    baseURL: 'https://rubys-northcoders-news.onrender.com/api', 
    timeout: 1000, 
    headers: {}
})
    

const getAllArticles = (searchParams) => {

    return axiosInstance.get(`/articles?${searchParams}`)
    .then(({data})=> {
        return data
    })
    .catch((error)=> {
        return error
    })
}


const getIndividualArticle = (article_id) => {
    return axiosInstance.get(`/articles/${article_id}`)
    .then(({data})=> {
        return data
    })
    .catch((error)=> {
        return error
    })
}

const getCommentsOnArticle = (article_id) => {
    return axiosInstance.get(`/articles/${article_id}/comments`)
    .then(({data}) =>{
        return data
    })
    .catch((error)=> {
        return error
    })
}


const patchVotesforArticle = (increaseVotes) => {
    return axiosInstance.patch(`/articles/${increaseVotes.article_id}`, increaseVotes)
    .then(({data}) => {
        return data
    })
    .catch((error)=> {
        return error
    })
}

const patchDownVotesforArticle = (decreaseVotes) => {
    return axiosInstance.patch(`/articles/${decreaseVotes.article_id}`, decreaseVotes)
    .then(({data}) => {
        return data
    })
    .catch((error)=> {
        return error
    })
}


const postComment = (formValues) => {

    const postData = {
        username: formValues.username,
        body: formValues.body
    }

    return axiosInstance.post(`/articles/${formValues.article_id}/comments`, postData)
    .then((response)=> {
        return response
    })
    .catch((error)=> {
        return error
    })
}

const deleteComment = (comment_id) => {
    
    return axiosInstance.delete(`/comments/${comment_id}`)
    .then((response) => {
        console.log(response)
        return response
    })
}

export {getAllArticles, getIndividualArticle, getCommentsOnArticle, patchVotesforArticle, patchDownVotesforArticle, postComment, deleteComment}






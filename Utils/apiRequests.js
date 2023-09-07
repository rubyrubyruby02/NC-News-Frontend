import axios from "axios"

const axiosInstance = axios.create({
    baseURL: 'https://rubys-northcoders-news.onrender.com/api/articles', 
    timeout: 1000, 
    headers: {}
})
    

const getAllArticles = (searchParams) => {

//   const params = new URLSearchParams();
//   if (searchParams.get("topic")) {
//     params.append("topic", searchParams.get("topic"));
//   }
//   if (searchParams.get("sort_by")) {
//     params.append("sort_by", searchParams.get("sort_by"));
//   }

    return axiosInstance.get(`?${searchParams}`)
    .then(({data})=> {
        return data
    })
    .catch((error)=> {
        return error
    })
}


const getIndividualArticle = (article_id) => {
    return axiosInstance.get(`/${article_id}`)
    .then(({data})=> {
        return data
    })
    .catch((error)=> {
        return error
    })
}

const getCommentsOnArticle = (article_id) => {
    return axiosInstance.get(`/${article_id}/comments`)
    .then(({data}) =>{
        return data
    })
    .catch((error)=> {
        return error
    })
}


const patchVotesforArticle = (increaseVotes) => {
    return axiosInstance.patch(`/${increaseVotes.article_id}`, increaseVotes)
    .then(({data}) => {
        return data
    })
    .catch((error)=> {
        return error
    })
}

const patchDownVotesforArticle = (decreaseVotes) => {
    return axiosInstance.patch(`/${decreaseVotes.article_id}`, decreaseVotes)
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

    return axiosInstance.post(`/${formValues.article_id}/comments`, postData)
    .then((response)=> {
        return response
    })
    .catch((error)=> {
        return error
    })
}

export {getAllArticles, getIndividualArticle, getCommentsOnArticle, patchVotesforArticle, patchDownVotesforArticle, postComment}






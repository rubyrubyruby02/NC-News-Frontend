import Header from "../Header";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { postComment } from "../../../Utils/apiRequests";
import { Link } from "react-router-dom";
import IndividualArticle from "../Articles/IndividualArticle";

const AddNewComment = () => {

    const { article_id } = useParams();

    const [formValues, setFormValues] = useState({
        article_id: article_id,
        username: "jessjelly",
        body: ""
    })

    const [submitted, setSubmitted] = useState(false)
    const [isError, setisError]=useState(false)

    const handleSubmit = (event) => {
        event.preventDefault();

        setFormValues(formValues);

        postComment(formValues)
        .then((response)=> {

            if (response.status === 201) {
                console.log("in If block")
                setSubmitted(true);
              }
              else {
                console.log("in Else block")
                setSubmitted(true);
                setisError(true)
              }
            
            setFormValues({
                    article_id: article_id,
                    username: "jessjelly",
                    body: ""
            })
        })
    } 

    const handleUserfeedback = () => {
        if(isError === false && submitted === true){
            return (<p>Your comment has been successfully submitted</p>)
        }
        else if(isError === true && submitted === true){
                return (<p>There was a problem please try again</p>)
        }
    }


  return (
    <>
      <Header />
      <h3>Article id: {article_id}</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="addComment">Add your comment</label>
          <textarea
            type="text"
            className="form-control"
            id="addComment"
            aria-describedby="addComment"
            placeholder="Type your comment here"
            value={formValues.addComment}

            onChange={(event) => {
                setFormValues({
                ...formValues,
                body: event.target.value,
              })
            }}
            required
          > 
          </textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>

      <h3>{handleUserfeedback()}</h3>

      <Link to={`/${article_id}`}>
          <span className="btn btn-info">Back to article</span>
      </Link>
    </>
  );
};

export default AddNewComment;

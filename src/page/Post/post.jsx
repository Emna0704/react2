

import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getPostById } from "../../store/slice/postSlice"
import { selectComment, selectPostById } from "../../store/selector"
import { fetchCommentByPostId } from "../../api/api"
import Comment from "../../composant/Comment/comment"
import { postComment } from "../../store/slice/commentSlice"
import './postPage.css'


const PostPage = () => {
    const [error, setError] = useState("")
    const id = useParams().id
    const dispatch = useDispatch()
    const post = useSelector(selectPostById)
    const comments = useSelector(selectComment)
    const [state, setState] = useState({ name: '', body: '' })



    useEffect(() => {
        dispatch(getPostById(id))
        dispatch(fetchCommentByPostId(id))
    }, []);

    if (!post) {
        return 'aucun post trouvé!'
    }

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if(state.name==='' || state.body==='')
        {
            setError("Le champ ne peut pas être vide.")
            return
        }
        dispatch(postComment(state))
        setError("")
        
    }


    return (
        <>
            <div>
                <h5 className="title">
                    {post?.title}</h5>
                <span className="postBody">{post?.body}</span>
            </div>
            <h3 className="comments"> {comments?.length} comments</h3>
            <ul> {
                comments?.length ? comments.map(comment => {
                    return <Comment key={comment.id} comment={comment} />
                }) : 'Pas de commentaires!'

            }
            </ul>

            <form>
                <h3>Ajouter un commentaire</h3>
                <div >
                    <label className="labelComm">Name</label>
                    <input className="inputComm" type="text" name="name"
                        onChange={handleChange}
                    />
                    <p style={{color: "red"}}>{error !== "" && error}</p>
                

                
                    <label className="labelComm">Body</label>
                    <textarea className="inputComm extareaComm " type="text" name="body"
                        onChange={handleChange}
                    />
                    <p style={{color: "red"}}>{error !== "" && error}</p>
                    <button className="addCommButton" onClick={handleSubmit}>Ajouter</button>
                    </div>
               
            </form>

        </>
    )


}

export default PostPage
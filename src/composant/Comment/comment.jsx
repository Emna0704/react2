import './comment.css'


const Comment = ({ comment }) => {
    return (
        <div className="comment-container">
            <span>{comment.name}</span>
            <p>{comment.body}</p>
        </div>
    )
}

export default Comment
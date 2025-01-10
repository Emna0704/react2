import { Link } from "react-router-dom"
import './postItem.css'

const PostItem = ({ post }) => {
    return (
        <div className="post-item">
            <Link to={`/post/${post.id}`} >
                <h5>{post.title}</h5>
                <span>{post.body}</span>
            </Link>
        </div>

    )
}
export default PostItem

import PostItem from "../PostItem/postItem"
import './post.css'
const PostList =({posts})=>{
  
    return(
        <div className="posts-container">
          { posts?.map(post=> <PostItem key={post.id} post={post}/>)
          }
        </div>
    )
}
export default PostList
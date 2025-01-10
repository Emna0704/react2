import { useDispatch, useSelector } from "react-redux";
import PostList from "../../composant/Post/post"
import { selectManuelPosts, selectPosts } from "../../store/selector";
import { fetchPosts } from "../../api/api";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './home.css'


const HomePage = () => {
    const posts = useSelector(selectPosts)
    const dispatch = useDispatch()
    const manuelPosts = useSelector(selectManuelPosts)
    const navigate = useNavigate()
    const navigateToAddPoste = () => {
        navigate('/post/add')
    }

    useEffect(() => {
        dispatch(fetchPosts())

    }, []);

    return (
        <>
            <h1>Bonjour , Bienvenue </h1>
            <button className='buttonHome' onClick={navigateToAddPoste}>Ajouter un post</button>
            <h3>Voici la liste des posts</h3>
            <PostList posts={posts.concat(manuelPosts)} />

        </>
    )
}

export default HomePage
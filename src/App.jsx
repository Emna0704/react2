import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './page/Home/home'
import PostPage from './page/Post/post'
import AddPostPage from './page/AddPost/addPost'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/post/add' element={<AddPostPage />} />
        <Route path='/post/:id' element={<PostPage />} />



      </Routes>
    </>
  )
}

export default App

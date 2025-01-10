import { useState } from "react"
import { useDispatch } from "react-redux"
import { addPostManuel } from "../../store/slice/postSlice"
import { useNavigate } from "react-router-dom"
import './AddPostPage.css';


const AddPostPage = () => {

  const [error, setError] = useState("")
  const [state, setState]=useState({title:'', body:''})
  const navigate=useNavigate()
  const dispatch = useDispatch()
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]:e.target.value
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (state.name === "" || state.body=== '') {
      setError("Le champ ne peut pas être vide.")
      return
    }
    dispatch(addPostManuel(state))
    setError('')
    navigate('/')
  }


  return (
    <div className="addPost-container">
      <span className="addTitle ">Add a post</span>
      <form className="addPostForm">
        <input 
        className="input"
          onChange={handleChange}
          placeholder={"Title"}
          type="text"
          name={'title'}
        />
        <p style={{ color: "red" }}>{error !== "" && error}</p>
        <textarea
        className="input text-area"
          onChange={handleChange}
          placeholder={"Content"}
          name={"body"}
        
        />
        <p style={{ color: "red" }}>{error !== "" && error}</p>
        <button className="addPostButton" onClick={handleSubmit}>Ajouter</button>

      </form>
    </div>
  )
}
export default AddPostPage
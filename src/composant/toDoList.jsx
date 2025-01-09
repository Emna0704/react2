import { useDispatch, useSelector } from "react-redux";
import { selectToDos } from "../store/selector/ToDoSelector";
import { fetchTasks, putTask } from "../api/tasks";
import { useEffect, useState } from "react";


const ToDoList = () => {


  const toDos = useSelector(selectToDos)
  const dispatch = useDispatch()
  const [isUpdating, setIsUpdating] = useState(false)
  useEffect(() => {
    dispatch(fetchTasks())

  }, []);

  const update = (toDo) => {
    setIsUpdating(true)
    dispatch(putTask(toDo.id, !toDo.completed)).then(() => {
      setIsUpdating(false)
    })
  }
  return (
    <>
      <h2>Liste</h2>
      {
        toDos.length ?
          <div>
            {
              toDos.map(toDo => {
                return (
                  <div key={toDo.id}>
                    <input
                      type="checkbox"
                      checked={toDo.completed}
                      onClick={() => !isUpdating && update(toDo)}
                    />
                    <span>{toDo.title}</span>

                  </div>)



              })
            }
          </div>
          :
          <p>No task</p>
      }
    </>)
}





export default ToDoList
import React,{useState} from 'react'
function Todo_List()
{
    const[tasks,setTasks]= useState(["Eat Breakfast","Go for a run"]);
    const[newtasks,setNewtasks]=useState("");
    function handleInputChanges(e){
        setNewtasks(e.target.value);
    }
    function addTask(){
        if(newtasks.trim() !== ""){
            setTasks(t => [...t,newtasks]);
            setNewtasks("");
        }
    }
    function deleteTask(index){
        const updatedTasks=tasks.filter((_,i) => i!= index);
        setTasks(updatedTasks);
    }
    function moveTaskUp(index){
        if(index > 0)
        {
            const updatedTasks=[...tasks];
            [updatedTasks[index],updatedTasks[index-1]]=[updatedTasks[index-1],updatedTasks[index]]
            setTasks(updatedTasks);
        }
    }
    function moveTaskDown(index){
        if(index < tasks.length - 1)
            {
                const updatedTasks=[...tasks];
                [updatedTasks[index],updatedTasks[index+1]]=[updatedTasks[index+1],updatedTasks[index]]
                setTasks(updatedTasks);
            }
    }
    return(<div className='todo-list'>
            
            <h1>Todo-List</h1>
            <div>
                <input type="text" value={newtasks} placeholder="Enter a task" onChange={(e)=>handleInputChanges(e)}/>
                <button className="add-button" onClick={addTask}>Add</button>
            </div>
            <ol>
                {tasks.map((task,index) => <li key={index}>
                    <span className="text">{task}</span>
                    <button className="delete-button" onClick={()=>deleteTask(index)}>Delete</button>
                    <button className="move-button" onClick={()=>moveTaskUp(index)}>👆</button>
                    <button className="move-button" onClick={()=>moveTaskDown(index)}>👇</button>

                 </li>)}
            </ol>
    

        </div>
    );

}
export default Todo_List
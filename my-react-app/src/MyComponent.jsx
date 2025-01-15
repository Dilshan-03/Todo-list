import React,{useState} from 'react'
function MyComponent(){
 
    const[foods,setFoods]=useState(["Apple","Banana","Guava"]);
    const handleAddFruits=()=> {
        const newFood=document.getElementById('add').value;
        setFoods(f=>[...f,newFood]);
        document.getElementById('add').value="";
    }
    const handleRemoveFruits=(index)=>{
          setFoods(f => f.filter((_,i)=> i != index));
    }

    
    return(
        <div>
             <h2>List of Fruits</h2>
             <ul>{foods.map((element,index) => <li key ={index} onClick={()=>handleRemoveFruits(index)}>{element}</li>
                )}</ul>
            <input type="text" id="add" placeholder='ENTER THE FRUIT'/>
            <button onClick={handleAddFruits}>Add</button>
        </div>
    );

}
export default MyComponent
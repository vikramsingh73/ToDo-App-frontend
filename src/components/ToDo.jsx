import React from 'react'
import axios from "axios";
import { MdDelete } from "react-icons/md";
import { baseURL } from '../utils/constant';


const ToDo = ({text,id, setUpdateUI,}) => {

const deleteTodo = () => {
    axios.delete(`${baseURL}/delete/${id}`).then(res =>{
        console.log(res.data);
        setUpdateUI((prevState)=>!prevState);
    });
};




  return (
    <div className="toDo">
      {text}
      <div className="icons">
        <MdDelete className="icon" onClick={deleteTodo}/>
      </div>
    </div>
  );
};

export default ToDo;

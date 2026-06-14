import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from "@fortawesome/free-solid-svg-icons";


const Task = ({taskName, index, id, del, pendingRender}) => {
    const [checkBox, sCheckBox] = useState(false) 
    return (
    <div className="taskHistory">
      <div>
        <input type="checkbox" name="checkbox" id={id} onChange={e=>{
            console.log(e.target.checked);            
            sCheckBox(e.target.checked)
            pendingRender(id, e.target.checked)
        }}/>
        {checkBox ? <label htmlFor={id}><del>{taskName}</del></label> : <label htmlFor={id}>{taskName}</label>}
      </div>

      <div onClick={()=>del(id)}>
        <FontAwesomeIcon icon={faX} />
      </div>
    </div>
  );
};

export default Task;

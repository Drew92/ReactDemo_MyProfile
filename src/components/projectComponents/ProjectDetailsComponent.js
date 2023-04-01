import React,{useState,useRef,useCallback} from 'react'

export default function ProjectDetailsComponent({projectStatement,projectTitle,details,myRole,client,teamMembers}) {

    const [toggle,setToggle]=useState(false)
    const ref3 = useRef()

   const hide= useCallback(()=>{
        ref3.current && ref3.current.focus()
        setToggle()
    },[])
    

  return (
    <React.Fragment>

        <div tabIndex='50' ref={ref3} ></div>
        {!toggle && (
            <div>
                <p  class="w3-center" >{projectStatement} &nbsp;
                    <button class="w3-light-grey w3-margin-bottom" onClick={()=>setToggle(!toggle)} style={{border:0,fontSize:'9px',padding:'2px'}} >
                        <i class="fa fa-chevron-down"></i>
                    </button> 
                </p>
            </div>
        )}
        
        {toggle && (
            <ul class="w3-ul w3-center  w3-hover-opacity-off" >
            <li class="w3-padding-32">
                <h4>{projectTitle}</h4>
                <hr/>
                {details}
            </li>
            <li class="w3-padding-16">
                <span class="w3-opacity">Role</span>
                <h5>{myRole}</h5>                        
            </li>
            <li class="w3-padding-16">
                <span class="w3-opacity">At</span>
                <h5>{client}</h5>                        
            </li>
            <li class="w3-padding-16">
                <span class="w3-opacity">With</span>
                <h5>{teamMembers}</h5>                        
            </li>
                <button class=" w3-light-grey  w3-medium w3-margin" style={{border:0}} onClick={hide}>
                <i class="fa fa-chevron-up"></i> </button>
            </ul>            
        )}
        <br/>
    </React.Fragment>
  )
}

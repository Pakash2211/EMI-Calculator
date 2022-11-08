import { useSelector } from "react-redux"
import Button from '@mui/material/Button';
import React from 'react'
import { OneCard } from "./card";


const History = () =>{
   const[show,setShow] = React.useState(false);
   const[initdata,setInitdata] =React.useState([]);
   let {history} = useSelector((res)=> res)
    React.useEffect(()=>{
      let alldata = JSON.parse(localStorage.getItem('EMIDATA')) || [];
       setInitdata(alldata);
    },[])
   return(
      
   !show ? (<Button variant="contained" color="success" onClick={()=> setShow(true)}>Search</Button>) : (
   <div>  
   <Button variant="contained"  onClick={()=> setShow(false)}>Hidden</Button>
   <div className="alldata">

    {
       !history.length ? (initdata.map((ele) =>{
         return (<OneCard history = {ele} />)
        }))  : (
         history.map((ele) =>{
            return (<OneCard history = {ele} />)
           })
       )

    }  
  
  </div>
   </div> 
   )

   )
}

export{History};    
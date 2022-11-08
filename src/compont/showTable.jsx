import { useSelector } from "react-redux";
import * as React from 'react';
import{Tabledata} from './table'
const Showtable = () =>{
    const {tableData} = useSelector((res)=>res)
    return(

        <div style={{width : '45%'}}>
         <Tabledata tableData = {tableData} />
         </div>
       
    )
}

export{Showtable};
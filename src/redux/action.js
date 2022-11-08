import{READ_DATA,UPDATE_DATA}from './actionType';


const readData = () =>{
    return{
        type : READ_DATA
    }
}

const updateData = (data) =>{
    return{
        type : UPDATE_DATA,
        playload : data
    }
}


export{readData,updateData};
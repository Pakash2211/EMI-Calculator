import{READ_DATA,UPDATE_DATA}from './actionType';
 const init = {
    monthlyEMI : "",
    totalpayble : "",
    intestamount : "",
    tableData :[],
    history : []

 }

//  Review Data
const reviewData = (playload) =>{
    const{amount,rate,tenure} = playload;
            let useramount = parseInt(amount);
            let userrate = parseFloat(rate);
           let month = parseInt(tenure);
   
        let interest = userrate / 100 / 12 ;
   
        let x = Math.pow(1+interest,month);
        //  calculation
         let monthlyEMI = Math.round((useramount*x*interest)/(x-1));
         let totalpayble = monthlyEMI*month;
         let intestamount = totalpayble - useramount;
         return{
             monthlyEMI,
             totalpayble,
             intestamount
         }
}

// each month emi amount and intrest
const tableData = (playload,data) =>{
   
    let arr = [];
    let{amount,
        rate,
        tenure, 
        } = playload;
let{monthlyEMI,
    totalpayble,
    intestamount} = data;
   
    amount = parseInt(amount);
    rate= parseFloat(rate);
   tenure = parseInt(tenure);

    let month = 1;
    let total = amount;
     
   while(month <= tenure && total != 0){
    let interestrate = rate/12;

    let intrestEMI =Math.round(total*interestrate/100);
    let priciple = monthlyEMI - intrestEMI;
    total = total - priciple;
    if(month == tenure){
        total = 0;
    }
    let obj = {
        total,
        month,
        intrestEMI,
        monthlyEMI,
        priciple

    }
    arr.push(obj);
    month++;
   }

   return arr;

}

// All datastore in localStorage
const  storeLocal = (data,table,playload) =>{
    let{amount,
        rate,
        tenure, 
        } = playload;
        amount = parseInt(amount);
        rate= parseFloat(rate);
       tenure = parseInt(tenure);

    let alldata = JSON.parse(localStorage.getItem('EMIDATA')) || [];
    let title = {
        amount,
        rate,
        tenure
    }
    let emi = {
        data,
        table,
        title
    }
    let newdata = [...alldata,emi];

    localStorage.setItem('EMIDATA',JSON.stringify(newdata));
    return newdata;
}

const dataReducer = (detail=init,action) =>{
    switch(action.type){
        
        case UPDATE_DATA : {
          let data = reviewData(action.playload);
          let table = tableData(action.playload,data);
          let history = storeLocal(data,table,action.playload);
            return{
                ...detail,...data,tableData:table,history : history
            }
        }

        case READ_DATA : {
            return{
                ...detail
            }
        }

        default : {
            return{...detail}
        }
    }
}

export{dataReducer};
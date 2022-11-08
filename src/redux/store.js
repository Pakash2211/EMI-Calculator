import { legacy_createStore as creatStore } from "redux";
import { dataReducer } from "./reducer";


const store = creatStore(dataReducer);

export{store};
import { Showview } from './compont/showview';
import './App.css';
import{Userform} from './compont/userform';
import{Showtable}from'./compont/showTable';
import{History} from './compont/history';

function App() {
  return (
    <div className="App">
      <h1 className='emititle'>CREDIT CARD EMI CALCULATOR</h1>
      <div className='upper'>
      
      <div className="review">
      <Userform/>
      <Showview/>
      </div>
      <Showtable/>
      </div>
      <History />
    </div>
  );
}

export default App;

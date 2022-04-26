import AddApointment from "./component/AddApointment";
import Search from "./component/Search";
import AddInfo from "./component/AddInfo";
import {AiFillRedditCircle} from 'react-icons/ai';

import './component/index.css'
import appointmentList from './component/data.json';

function App(){
  return (
<article>
  <h3 style={{color:'green'}}>
    <AiFillRedditCircle /> 예약 시스템 </h3>
  <AddApointment />
  <Search />

  <div id="list">
    <ul>
      {appointmentList.map(
        item=>(
        <AddInfo
        key={item.id}
        appo ={item}
        />
      ))}
    </ul>
  </div>
</article>
  );
}

export default App;
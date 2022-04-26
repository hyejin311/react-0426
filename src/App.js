import React, { useState,useEffect,useCallback } from "react";
import ReactDOM from "react-dom/client";

import AddApointment from "./component/AddApointment";
import Search from "./component/Search";
import AddInfo from "./component/AddInfo";

import {AiFillRedditCircle} from 'react-icons/ai';
import './component/index.css'

function App(){
//state 설정
let [appointmentList,setAppointmentList] = useState([]);
//callback
const fetchData = useCallback(()=>{
  fetch('./data.json')
  .then(response => response.json())
  .then(data=> setAppointmentList(data))
}, [])
//effect
useEffect(()=>{fetchData()}, [fetchData])

  return (
<article>
  <h3 style={{color:'green'}}>
    <AiFillRedditCircle /> 예약 시스템 </h3>
  <AddApointment />
  <Search />

  <div id="list">
    <ul>
      {appointmentList.map(appo=>(
        <AddInfo
        key={appo.id}
        appo ={appo}
        onDeleteAppointment ={
          appoId =>
          setAppointmentList(appointmentList.filter(
          appo => appo.id !== appoId
        ))}
        />
      ))}
    </ul>
  </div>
</article>
  );
}

export default App;
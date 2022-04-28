import React, { useState,useEffect,useCallback } from "react";
import ReactDOM from "react-dom/client";

import AddApointment from "./component/AddApointment";
import Search from "./component/Search";
import AddInfo from "./component/AddInfo";

import {AiFillRedditCircle} from 'react-icons/ai';
import './component/index.css'

function App(){
//state 설정
 let [appointmentList,setAppointmentList] = useState([])
//search
 let [query,setQuery] = useState('')
//sort
let [sortBy,setSortBy] = useState('ownerName')
let [orderBy,setOrderBy] = useState('asc');

 //검색 필터 -> 배열 => AddInfo 불러오기
 const filterAppointment= appointmentList.filter(
   item => {
     return(
       item.petName.toLowerCase().includes(query.toLowerCase()) ||
       item.ownerName.toLowerCase().includes(query.toLowerCase())
     )
   }
 ).sort((a,b)=>{
   let order = (orderBy === 'asc') ? 1 : -1;
   a[sortBy].toLowerCase() < b[sortBy].toLowerCase() ? -1 * order : 1 * order 
 });

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

  <AddApointment
  onSendAppointment={
    myAppointment => setAppointmentList([...appointmentList,myAppointment])
  }
  lastId={
    appointmentList.reduce((max,item)=>
    Number(item.id) > max ? Number(item.id) : max,0)
  }
  />

  <Search
  query={query}
  onQueryChange={myQuery => setQuery(myQuery)}
  />

<div id="list">
    <ul>
      {filterAppointment.map(appointment=>(
        <AddInfo
        key={appointment.id}
        appointment ={appointment}
        onDeleteAppointment ={
          appointmentId =>
          setAppointmentList(appointmentList.filter(
            appointment => appointment.id !== appointmentId
        ))}
        />
      ))}
    </ul>
  </div>
</article>
  );
}

export default App;
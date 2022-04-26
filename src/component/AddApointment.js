import { useState } from 'react';
import {AiOutlineLike} from 'react-icons/ai';

function AddWrite({toggleForm}){
    if(!toggleForm){
        return null
    }
    return(
        <>
<ul>
    <li>
        <label htmlFor='userName'>예약자명</label>
        <input type="userName" /></li>
    <li>
        <label htmlFor='userBabe'>애기이름</label>
        <input type="userBabe" /></li>
    <li>
        <label htmlFor='usertel'>전화번호</label>
        <input type="usertel" /></li>
    <li>
        <label htmlFor='userDate'>예약날짜</label>
        <input type="userDate" /></li>
    <li>
        <label htmlFor='write'>기타사항</label>
        <textarea id="write" placeholder="기타사항"></textarea></li>
    </ul>
    <p>
        <input type="submit" />
    </p>
        </>
    )
}

function AddApointment(){
let [toggleForm,setToggleForm] = useState(false);
    return(
<div id="appoint">
    <h4 onClick={()=>{
        setToggleForm=(!toggleForm)
    }}>
    <AiOutlineLike /> 예약하기</h4>
    <AddWrite
    toggleForm = {toggleForm} />
    </div>
    )
}

export default AddApointment
//toggleForm && <AddWrite />
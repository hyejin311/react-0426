import { useState } from 'react';
import {AiOutlineLike} from 'react-icons/ai';

function AddWrite({toggleForm,formData,setFormData,formDataPub}){
    if(!toggleForm){
        return null
    }
    return(
        <>
<ul>
    <li>
        <label htmlFor='userName'>예약자명</label>
        <input type="text" id="userName"
        onChange={(event) => {
            setFormData({...formData,ownerName:event.target.value})
        }} />
        </li>

    <li>
        <label htmlFor='userBabe'>애기이름</label>
        <input type="text" id="userBabe"
        onChange={(event) => {
            setFormData({...formData,petName:event.target.value})
        }} />
        </li>

    <li>
        <label htmlFor='userDate'>예약일</label>
        <input type="date" id="userDate"
        onChange={(event) => {
            setFormData({...formData,aptDate:event.target.value})
        }} />
        </li>

    <li>
        <label htmlFor='userTime'>예약시간</label>
        <input type="time" id="userTime"
        onChange={(event) => {
            setFormData({...formData,aptTime:event.target.value})
        }} />
        </li>

    <li>
        <label htmlFor='write'>기타사항</label>
        <textarea id="write" placeholder="기타사항"></textarea>
        </li>
    </ul>
    <p>
        <button type="submit"
        onClick={formDataPub}>
            예약하기</button>
    </p>
        </>
    )
}

function AddApointment({onSendAppointment,lastId}){
const clearData = {
    petName :'',
    ownerName:'',
    aptNotes:'',
    aptDate:''
}

let [toggleForm,setToggleForm] = useState(false);

//form 데이터 생성
let [formData,setFormData] = useState(clearData);

function formDataPub(){
    const formDataInfo = {
       id :lastId+1, 
        petName: formData.petName,
        ownerName:formData.ownerName,
        aptNotes:formData.aptNotes,
        aptDate: formData.aptDate +' '+formData.aptTime
    }
    onSendAppointment(formDataInfo)
    setFormData(clearData)
    setToggleForm(!toggleForm)
}

return(
<div id="appoint">
    <h4 onClick={()=>{
        setToggleForm=(!toggleForm)
    }}>
    <AiOutlineLike /> 예약하기</h4>
    <AddWrite
    toggleForm = {toggleForm}
    formData = {formData}
    formDataPub= {formDataPub}
    setFormData={setFormData}
    />
    </div>
    )
}

export default AddApointment
//toggleForm && <AddWrite />
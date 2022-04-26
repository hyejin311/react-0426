import {AiOutlineLike} from 'react-icons/ai';

function AddApointment(){
    return(
<div id="appoint">
    <h4> <AiOutlineLike /> 예약하기 </h4>

<ul>
    <li>
        <label htmlFor='userName'>예약자명</label>
        <input type="text" /></li>
    <li>
        <label htmlFor='userBabe'>애기이름</label>
        <input type="text" /></li>
    <li>
        <label htmlFor='usertel'>전화번호</label>
        <input type="text" /></li>
    <li>
        <label htmlFor='userDate'>예약날짜</label>
        <input type="text" /></li>
    <li>
        <label htmlFor='write'>기타사항</label>
        <textarea id="write" placeholder="기타사항"></textarea></li>
    </ul>
    <p>
        <input type="submit" />
    </p>
    </div>
    )
}

export default AddApointment
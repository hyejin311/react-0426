import {AiOutlineSmile} from 'react-icons/ai';

function AddInfo({appointment,onDeleteAppointment}){
return(
<li>
<dl>
    <dt>예약번호 : {appointment.petName}</dt>
    <dd className='owner'><dfn>예약자명 :</dfn> {appointment.ownerName}</dd>
    <dd className='notes'>desc : {appointment.aptNotes}</dd>
    <dd className='date'> date: {appointment.aptDate} </dd>
</dl>
<p>
<button
onClick={()=>onDeleteAppointment(appointment.id)
}
> <AiOutlineSmile /> </button>
</p>
</li>
    )
}

export default AddInfo;
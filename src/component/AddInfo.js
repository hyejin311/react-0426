import {AiOutlineSmile} from 'react-icons/ai';

function AddInfo({appo}){
return(
<li>
<dl>
    <dt>예약번호 : {appo.petName}</dt>
    <dd className='owner'><dfn>예약자명 : {appo.ownerName}</dfn></dd>
    <dd className='notes'>desc : {appo.aptNotes}</dd>
    <dd className='date'> date: {appo.aptDate} </dd>
</dl>

<p>
<button> <AiOutlineSmile /> </button>
</p>
</li>
    )
}

export default AddInfo;
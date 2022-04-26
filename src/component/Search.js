import {AiOutlineSearch, AiOutlineRocket} from 'react-icons/ai';

function DropDown(){
    return(
        <ul>
            <li>예약날짜</li>
            <li>예약자명</li>
            <li>예약변경 및 취소</li>
            <li>예약수정</li>
            <li>평점</li>
        </ul>
    )
}


function Search(){
    return(
        <div id="search">
            <p>
            <AiOutlineSearch />
                <input type="text" placeholder='search'/>
                <button type="submit">보내기</button>
                <AiOutlineRocket />
            </p>
            <DropDown />
        </div>
    )
}

export default Search
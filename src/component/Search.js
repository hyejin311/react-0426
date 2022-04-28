import { useState } from 'react';
import {AiOutlineSearch, AiOutlineRocket, AiFillAliwangwang} from 'react-icons/ai';

function DropDown({toggleSort}){
    if(!toggleSort){
        return null
    }
    return(
        <ul>
            <li>애기이름 <AiFillAliwangwang /></li>
            <li>예약자명 <AiFillAliwangwang /></li>
            <li>날짜 <AiFillAliwangwang /></li>
            <li>오름차순 <AiFillAliwangwang /></li>
            <li>내림차순 <AiFillAliwangwang /></li>
        </ul>
    )
}

function Search({query,onQueryChange}){
    let [toggleSort, setToggleSort] = useState(false);
    return(
        <div id="search">
            <p>
            <AiOutlineSearch />
                <input
                type="text"
                placeholder="search"
                value={query}
                onChange={
                    (event)=>{onQueryChange(event.target.value)}
                }
                />
                <button type="button"
                onClick={
                    ()=> {setToggleSort(!toggleSort)}
                }>정렬하기</button>
                <AiOutlineRocket />
            </p>
            <DropDown 
            toggleSort = {toggleSort} />
        </div>
    )
}

export default Search
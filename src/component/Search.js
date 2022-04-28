import { useState } from 'react';
import {AiOutlineSearch, AiOutlineRocket, AiFillCheckCircle} from 'react-icons/ai';

function DropDown({toggleSort,sortBy,onSortByChange,orderBy,onOrderByChange}){
    if(!toggleSort){
        return null
    }
    return(
        <ul>
            <li
            onClick={()=> {onSortByChange('petName')}}>
                예약번호
               {(sortBy === 'petName') && <AiFillCheckCircle />}
                </li>

            <li
            onClick={()=> {onSortByChange('ownerName')}}>
                예약자명
                {(sortBy === 'ownerName') && <AiFillCheckCircle />}
                </li>

            <li
            onClick={()=> {onSortByChange('aptDate')}}>
                날짜
                {(sortBy === 'aptDate') && <AiFillCheckCircle />}
                </li>

            <li
            onClick={()=> {onOrderByChange('asc')}}>
                오름차순
                {(orderBy === 'asc') && <AiFillCheckCircle />}
                </li>

            <li
            onClick={()=> {onOrderByChange('desc')}}>
                내림차순
                {(orderBy === 'desc') && <AiFillCheckCircle />}
                </li>
        </ul>
    )
}

function Search({query,onQueryChange,sortBy,onSortByChange,orderBy,onOrderByChange}){
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
            toggleSort = {toggleSort}
            sortBy ={sortBy}
            orderBy={orderBy}
            onSortByChange = {mySort => onSortByChange(mySort)}
            onOrderByChange = {myOrder => onOrderByChange(myOrder)}
            />
        </div>
    )
}

export default Search
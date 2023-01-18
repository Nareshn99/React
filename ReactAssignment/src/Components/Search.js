import React from 'react';
import './Search.css';
import { FaMicrophone } from "react-icons/fa";


function Search() {
  return (
    <form className='search'>
      <div className='input'>
        <input/>
        <FaMicrophone/>
      </div>
      <div className='button'>
        <button type="submit" variyant="outlined">Google Search</button>
        <button type="submit" variyant="outlined">i'm Feeling Lucky</button>
      </div>
    </form>
  )
}

export default Search

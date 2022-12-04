import './list.css';  
import axios from 'axios';
import { Card } from '../Component/Card';
import { MOVIE_LIST } from '../Component/data';
import React, { useEffect, useState } from 'react';

// export const instance = axios.create()

function List() {
  const [data, setData] = useState([]);
  const movie = MOVIE_LIST;

  const getData = async () => {
    try {
      setData(movie)
      console.log(movie)
    } 
    catch (error) {
      alert("error")
    }
  }
  useEffect(() => {
    getData()
  }, []);

    return (
        <div className='listAllContainer'>
          <h1 className='title'>Trending</h1>
          <div className='listContainer'>
            {
              data.map((cur) => 
              <Card 
              img={cur.img}
              name={cur.name}
              year={cur.year}
              time={cur.runtime}
              id={cur.id}
              />)
            }
          </div>
          <h1 className='title'>Latest Movies</h1>
          {/* <div className='listContainer'>
            {
              data.map((cur) => 
              <Card 
              img={cur.img}
              name={cur.name}
              year={cur.year}
              time={cur.runtime}
              id={cur.id}
              />)
            }
          </div> */}
        </div>

    )
}
export default List;
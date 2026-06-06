import React from 'react'
import './Moviecard.css';
import Moviecontrol from './Moviecontrol';
function Moviecard({movie,type}) {
  return (
    <div className='movie-card'>
        <div className='overlay'></div>
        {movie.Poster?(<img src={movie.Poster} alt={movie.Title}/>):
        (<div className='filter-poster' >
        
        </div>)}
        <Moviecontrol movie={movie} type={type}/>
    </div>
  )
}

export default Moviecard
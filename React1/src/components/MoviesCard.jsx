import React from 'react'
import './Moviescard.css';
import Moviecontrol from './Moviescontrol';
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
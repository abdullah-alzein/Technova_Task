import React from 'react'
import { useMovieContext } from './context/GlobalContext';
import * as actions from "./context/ActionTypes"

function Moviecontrol({ movie , type }) {

    const MovieContext=useMovieContext()
    return (
        <div className='inner-card-controls'>
            {
                type==="watchlist"&&(
                    <>
                        <button onClick={()=>MovieContext.MoviesDispatch({
                            type:actions.ADD_MOVIE_TO_WATCHED,
                            payload: movie,
                        })} className='ctrl-btn'>
                            <i className='fa-solid fa-eye'/>
                        </button>

                        <button onClick={()=>MovieContext.MoviesDispatch({
                            type:actions.REMOVE_MOVIE_FROM_WATCHLIST,
                            payload:movie.imdbID,
                        })} className='ctrl-btn'>
                            <i className='fa-fw fa fa-times'></i>
                        </button>
                    </>
                )
            }

            {
                type === "watched" && (
                    <>
                        <button onClick={() => MovieContext.MoviesDispatch({
                            type: actions.MOVIE_TO_WATCHLIST,
                            payload: movie,
                        })} className="ctrl-btn">
                            <i className="fa-solid fa-eye-slash" />
                        </button>

                        <button onClick={() => MovieContext.MoviesDispatch({
                            type: actions.REMOVE_MOVIE_FROM_WATCHED,
                            payload: movie.imdbID,
                        })} className="ctrl-btn">
                            <i className="fa-fw fa fa-times"></i>
                        </button>
                    </>
                )
            }
        </div>
    )
}

export default Moviecontrol;
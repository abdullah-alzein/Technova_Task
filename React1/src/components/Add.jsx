import React, { useEffect, useState } from 'react';
import './Add.css';
import axios from 'axios';
import ResultCard from './ResultCard';

function Add() {
    const [Searchvalue, setSearchvalue] = useState("");
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get(`https://www.omdbapi.com/?s=${Searchvalue}&apikey=a7ba24b9`)
            .then((response) => {
                if (response.data.Search) {
                    console.log(response.data.Search);
                    setMovies(response.data.Search);
                }
            })
            .catch((error) => console.log(error));
    }, [Searchvalue]);

    return (
        <div className='add-page'>
            <div className='container'>
                <div className='add-container'>
                    <div className='input-container'>
                        <input 
                            type='text'
                            placeholder='Search for your movie'
                            value={Searchvalue}
                            onChange={(e) => setSearchvalue(e.target.value)}
                        />
                    </div>

                    {movies.length > 0 && (
                        <ul className='results'>
                            {movies.map((movie) => (
                                <li key={movie.imdbID}>
                                    <ResultCard movie={movie} />
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Add;
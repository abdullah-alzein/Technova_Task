import * as actions from "./ActionType";

export const reduser = (state, action) => {
    switch (action.type) {
        case actions.ADD_MOVIE_TO_WATCHLIST:
            return {
                ...state,
                watchlist: [action.payload, ...state.watchlist]
            };
        
        case actions.REMOVE_MOVIE_FROM_WATCHLIST:
            return {
                ...state,
                watchlist: state.watchlist.filter((movie) => movie.imdbID !== action.payload),
            };
            
        case actions.MOVIE_TO_WATCHLIST:
            return {
                ...state,
                // Removes the movie from watched list
                watched: state.watched.filter((movie) => movie.imdbID !== action.payload.imdbID),
                // Adds it back into the watchlist
                watchlist: [action.payload, ...state.watchlist],
            };
            
        case actions.ADD_MOVIE_TO_WATCHED:
            return {
                ...state,
                // Removes the movie from watchlist when marked as watched
                watchlist: state.watchlist.filter((movie) => movie.imdbID !== action.payload.imdbID),
                // Adds it to the watched array
                watched: [action.payload, ...state.watched],
            };
            
        case actions.REMOVE_MOVIE_FROM_WATCHED:
            return {
                ...state,
                // Fixed the trailing 'D' typo here
                watched: state.watched.filter((movie) => movie.imdbID !== action.payload),
            };
            
        default:
            return state;
    }
};
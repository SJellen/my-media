import React, {useState, useContext} from 'react'
import { handshakeFiveMovies, moviesWatched, moviesWatching } from './movieList'
import { Context } from './Context'


 function Movies() {

    const {fullStarMaker, halfStarMaker, reviewToggle,filterSet, dimmer} = useContext(Context)

    const [handshakeReview, setHandshakeReview] = useState()
    const [watchedReview, setWatchedReview] = useState()
    const [watchingReview, setWatchingReview] = useState()

    
   
    
    
   
        
    const handshakeId = handshakeFiveMovies.map((movie, index) => (
        <div className="movieHandshake"  key={movie.id} style={filterSet(movie, handshakeReview)}>
            <img src={movie.poster} alt="movie posters" className="movie" />
            <div className="word_box">
            <h4 className="title" >{movie.title}</h4>
           <span className="star-container" ><h4 className="star">{ fullStarMaker(movie.rating)}</h4><h4 className="half-star">{halfStarMaker(movie.rating)}</h4></span>
            { handshakeReview === movie.id ? 
                <div>
                <i className="material-icons arrow_drop_up_icon" onClick={() => reviewToggle(index, handshakeFiveMovies, handshakeReview, setHandshakeReview)}
                style={{display: movie.review === "" ? "none" : ""}}
                >arrow_drop_up_icon</i>
                <p className="review" style={{display:  movie.id ? "block" : "none"}}>{movie.review}</p>
                </div>
                 :
                 <i className="material-icons arrow_right_icon" onClick={() => reviewToggle(index, handshakeFiveMovies, handshakeReview, setHandshakeReview)}
                 style={{display: movie.review === "" ? "none" : ""}}
                 >arrow_right_icon</i>
            }
            </div>
        </div>
    ))

    const nowWatchingMovies = moviesWatching.map((movie, index) => (
        <div className="now_watching_movies"    key={movie.id} style={filterSet(movie, watchingReview)}>
            <img src={movie.poster} alt="movie posters" className="movie" />
            <div className="word_box">
            <h4 className="title">{movie.title}</h4>
            <span className="star-container"><h4 className="star">{ fullStarMaker(movie.rating)}</h4><h4 className="half-star">{halfStarMaker(movie.rating)}</h4></span>
            { watchingReview === movie.id ? 
                <div>
                <i className="material-icons arrow_drop_up_icon" onClick={() => reviewToggle(index, moviesWatching, watchingReview, setWatchingReview)} 
                style={{display: movie.review === "" ? "none" : ""}}>arrow_drop_up_icon</i>
                <p className="review" style={{display:  movie.id ? "block" : "none"}}>{movie.review}</p>
                </div>
                 :
                 <i className="material-icons arrow_right_icon" onClick={() => reviewToggle(index, moviesWatching, watchingReview, setWatchingReview)}
                 style={{display: movie.review === "" ? "none" : ""}}
                 >arrow_right_icon</i>
            }
            </div>    
        </div>
    ))

    const recentlyWatchedMovies = moviesWatched.map((movie, index) => (
        <div className="recently_watched_movies"  key={movie.id}  style={filterSet(movie, watchedReview)}>
            <img src={movie.poster} alt="movie posters" className="movie"  />
            <div className="word_box">
            <h4 className="title">{movie.title}</h4>
            <span className="star-container" ><h4 className="star">{ fullStarMaker(movie.rating)}</h4><h4 className="half-star">{halfStarMaker(movie.rating)}</h4></span>
            { watchedReview === movie.id ? 
                <div>
                <i className="material-icons arrow_drop_up_icon" onClick={() => reviewToggle(index, moviesWatched, watchedReview, setWatchedReview)} 
                style={{display: movie.review === "" ? "none" : ""}}>arrow_drop_up_icon</i>
                <p className="review" style={{display:  movie.id ? "block" : "none"}}>{movie.review}</p>
                </div>
                 :
                 <i className="material-icons arrow_right_icon" onClick={() => reviewToggle(index, moviesWatched, watchedReview, setWatchedReview)}
                 style={{display: movie.review === "" ? "none" : ""}}
                 >arrow_right_icon</i>
            }
            </div>     
        </div>
    ))
    
    return (
        <div >
            <h1 className="section_title" id="movies" style={dimmer}>Movies</h1>
            <h2 className="sub_section_title" style={dimmer}>Handshake Five</h2>
            <div className="movies_handshake_flex">
            {handshakeId}
            </div>
            <h2 className="sub_section_title" style={dimmer}>Currently Watching
            </h2>
            <div className="currently_watching_flex">
            {nowWatchingMovies}
            </div>
            <h2 className="sub_section_title" style={dimmer}>Recently Watched</h2>
            <div className="recently_watched_flex">
            {recentlyWatchedMovies}
            </div>
        </div>
    )
}

export default Movies